const baseRoute =
  'https://99c0-2401-7400-4000-aadb-f452-b546-aecd-1885.ap.ngrok.io';

export const apiRoutes = {
  allocation: baseRoute + '/api/v1/assetAllocation',
  home: baseRoute + '/api/v1/home',
  performance: baseRoute + '/api/v1/assetPerformance',
  report: baseRoute + '/api/v1/assetReport',
  investment: baseRoute + '/api/v1/investment',
  transaction: baseRoute + '/api/v1/transaction'
};
