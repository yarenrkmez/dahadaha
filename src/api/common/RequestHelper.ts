import axios from 'axios';
const header = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
};


const get = async (url: string) => {
    try {
        const res:{data:Array<any>,status:number} = await axios.get(url, {
            headers: header,
        });
        return res;
    } catch (err) {
        return err;
    }
};

export { get };