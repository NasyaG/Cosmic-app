import axios from 'axios';
// axios is library used for calling external apis
import { DateTime } from 'luxon';
//luxon library for date/time math

function getDate(offset) {
    let now = DateTime.now().minus({ days: offset });
    let dd = String(now.day).padStart(2, "0");
    let mm = String(now.month).padStart(2, "0");
    let yyyy = now.year;
    console.log("getDate(): " `${yyyy}-${mm}-${dd}`);
    return `${yyyy}-${mm}-${dd}`;
}

let startDate = getDate(5);
let endDate = getDate(0);

export default {
    getAPOD(today) {
        return axios.get("https://api.nasa.gov/planetary/apod", {
            params: {
                api_key: process.env.VUE_APP_API_KEY,
                date: today,
            },
        });
    },
    getAPODlist() {
        return axios.get("https://api.nasa.gov/planetary/apod", {
            params: {
                api_key: process.env.VUE_APP_API_KEY,
                start_date: startDate,
                end_date: endDate,
            },
        });
    },
};