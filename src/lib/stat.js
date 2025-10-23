import rybbit from '@rybbit/js';

const domains = {
	'nsgnl.dev': '1',
	'nikolai.cc': '2',
	'nikolai.gillissen.com': '3'
};

export const init = () => {
	const hostname = window.location.hostname;
	if (!Object.keys(domains).some((d) => hostname === d || hostname.endsWith(`.${d}`))) return;
	rybbit.init({
		analyticsHost: 'https://stats.nsgnl.cool',
		siteId: domains[hostname],
		trackWebVitals: true
	});
};
