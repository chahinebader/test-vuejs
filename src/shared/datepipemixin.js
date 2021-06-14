import moment from 'moment';

export default {
  filters: {
    // used for iso Z---GMT
    toISOString(str) {
      return moment(str).toISOString();
    },
// Used for inputs date
    formatDate(str, format = null, outputFormat = 'MM-DD-YYYY') {
      if (format == null) {
        return moment(str).format(outputFormat);
      }

      return moment(str, format).format(outputFormat);
    },
    // JS timestap 516515616516515 use this for new Date
    diffForHumans(str) {
      return moment(str).from(moment());
    },
  },
};