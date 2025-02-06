// @ts-check

/**
 * This syncpack config ensures package versions remain in sync
 * across packages in this workspace. It also pins them to exact
 * versions so that we have more control over updates, rather than
 * letting them get updated in the lockfile when installing (seemingly)
 * unrelated packages.
 *
 * The motivation behind this config is that we have had packages break
 * due to transitive dependencies getting updated and skewing versions
 * across packages. We've also noticed some dependencies such as Hono
 * will introduce unintentional breaking changes in minor updates, so
 * we need to be careful when updating dependencies.
 */

/** @type {import("syncpack").RcFile} */
const config = {
	indent: '\t',
	lintFormatting: false, // handled by prettier
	versionGroups: [],
	semverGroups: [
		{
			label: 'pin all deps to exact versions',
			range: '',
			dependencies: ['**'],
			packages: ['**'],
		},
	],
}

module.exports = config
