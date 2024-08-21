const controlCache = (req, res, next) => {
    res.header('Cache-Control', 'private');
    res.header('Cache-Control', 'no-store');
    res.header('Cache-Control', 'must-revalidate');
    res.header('Cache-Control', 'no-cache');
    res.header('Pragma', 'no-cache');
    next();
  };
  
  module.exports = controlCache;
  