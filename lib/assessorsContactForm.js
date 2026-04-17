const LIMITS = {
  name: 120,
  email: 254,
  message: 4000,
  mobile: 24,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function stripInvisible(s) {
  return s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
}

export function sanitizeAssessorContactInput(raw, { includeMobile = true } = {}) {
  const o = raw && typeof raw === "object" ? raw : {}
  let name = stripInvisible(String(o.name ?? ""))
  name = name.replace(/\s+/g, " ").trim().slice(0, LIMITS.name)

  let email = stripInvisible(String(o.email ?? ""))
  email = email.trim().toLowerCase().slice(0, LIMITS.email)

  let message = stripInvisible(String(o.message ?? ""))
  message = message.replace(/\r\n/g, "\n").trim().slice(0, LIMITS.message)

  let mobile = stripInvisible(String(o.mobile ?? ""))
  if (includeMobile) {
    mobile = mobile.replace(/[^\d+()\s-]/g, "").trim().slice(0, LIMITS.mobile)
  } else {
    mobile = ""
  }

  return { name, email, message, mobile }
}

export function validateAssessorContact(sanitized, { mobileOptional = true } = {}) {
  const errors = {}

  if (sanitized.name.length < 2) {
    errors.name = "Please enter your name (at least 2 characters)."
  }

  if (!EMAIL_RE.test(sanitized.email)) {
    errors.email = "Please enter a valid email address."
  }

  if (sanitized.message.length < 3) {
    errors.message = "Please enter your role or message (at least 3 characters)."
  }

  if (!mobileOptional) {
    const digits = sanitized.mobile.replace(/\D/g, "")
    if (digits.length < 10) {
      errors.mobile = "Please enter a valid mobile number (at least 10 digits)."
    }
  } else if (sanitized.mobile.length > 0) {
    const digits = sanitized.mobile.replace(/\D/g, "")
    if (digits.length < 8) {
      errors.mobile = "That phone number looks too short."
    }
  }

  return errors
}

export function hasFieldErrors(errors) {
  return Object.values(errors).some(Boolean)
}
