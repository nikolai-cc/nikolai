import rybbit from '@rybbit/js';

const domains = {
	'nsgnl.dev': '1',
	'nikolai.cc': '2',
	'nikolai.gillissen.com': '2'
};

export const init = () => {
	const hostname = window.location.hostname;
	const id = Object.entries(domains).find(([domain]) => hostname.endsWith(domain))[1];

	if (!id) return;

	rybbit.init({
		analyticsHost: 'https://stats.nsgnl.cool/api',
		siteId: id,
		trackWebVitals: true
	});
};
