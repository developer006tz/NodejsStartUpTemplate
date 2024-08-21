function formatPhoneNumber(number) {
    let cleaned = number.replace(/\D/g, '');
    cleaned = cleaned.replace(/^0+/, '');
    if (cleaned.startsWith('255')) {
      return cleaned;
    }
    if (cleaned.length === 9) {
      return '255' + cleaned;
    }
    if (cleaned.length === 10 && cleaned.startsWith('0')) {
      return '255' + cleaned.slice(1);
    }
    if (cleaned.length === 12 && cleaned.startsWith('255')) {
      return cleaned;
    }
    return null;
  }
 
  module.exports = formatPhoneNumber