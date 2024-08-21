const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Methods',
      'POST, GET, OPTIONS, PATCH, PUT, DELETE'
    );
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Cross-Origin-Opener-Policy', 'cross-origin');
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).json({ method: 'OPTIONS' });
    }
  
    next();
  };
  
  module.exports = cors;
  