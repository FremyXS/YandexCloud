const CLIENT_ID = '0442433dba29459e8920374c65a840da';
const CLIENT_SECRET = '9f169d5e9b134c9d899ff2935c2caf64';
const BASE_URL = 'https://cloud-api.yandex.net/v1/disk/'
const CONFIRM_URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID}&force_confirm=yes`
const AUTH_URL = 'https://oauth.yandex.ru/token';
const NAME_FOLDER = 'YandexCloudManager';

export{
    CLIENT_ID, CLIENT_SECRET, BASE_URL, CONFIRM_URL, AUTH_URL, NAME_FOLDER
}