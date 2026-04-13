import styles from "../Styles/PermissionStatement.module.css"

function PermissionStatement() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<h2 className={styles.heading}>Permission Statement</h2>
				<p className={styles.copy}>
					These assets are intended for editorial use by media outlets and journalists. By downloading these materials, you agree to use them
					exclusively for coverage of ivvi. We kindly request that you notify our team or tag us in your published work so we can share your
					coverage. For commercial licensing or other inquiries, please contact <strong>jo@ivvi.app.</strong>
				</p>
			</div>
		</section>
	)
}

export default PermissionStatement
