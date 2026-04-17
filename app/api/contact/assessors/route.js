import { NextResponse } from "next/server"
import {
  sanitizeAssessorContactInput,
  validateAssessorContact,
  hasFieldErrors,
} from "@/lib/assessorsContactForm"

const KINDS = new Set(["assessor-resources"])

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    )
  }

  const formKind = typeof body.formKind === "string" ? body.formKind : ""
  if (!KINDS.has(formKind)) {
    return NextResponse.json(
      { ok: false, message: "Unknown form type." },
      { status: 400 }
    )
  }

  const includeMobile = formKind === "assessor-resources"
  const sanitized = sanitizeAssessorContactInput(body, { includeMobile })
  const errors = validateAssessorContact(sanitized, { mobileOptional: true })

  if (hasFieldErrors(errors)) {
    return NextResponse.json(
      { ok: false, errors, message: "Please fix the highlighted fields." },
      { status: 422 }
    )
  }

  const upstream = process.env.ASSESSORS_CONTACT_UPSTREAM_URL
  if (upstream) {
    try {
      const payload = new URLSearchParams({
        formKind,
        name: sanitized.name,
        email: sanitized.email,
        message: sanitized.message,
        mobile: sanitized.mobile,
      })
      const upstreamRes = await fetch(upstream, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: payload.toString(),
      })
      if (!upstreamRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            message: "We could not send your message. Please try again shortly.",
          },
          { status: 502 }
        )
      }
    } catch {
      return NextResponse.json(
        {
          ok: false,
          message: "We could not send your message. Please try again shortly.",
        },
        { status: 502 }
      )
    }
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks — we have received your request.",
  })
}
