import mysql from 'mysql';

export const db = mysql.createPool({
    connectionLimit: 10,
    host:"15.235.83.30",
    database:'grupohot_hoteles',
    user:"grupohoteles_userAdmHoteles",
    password:"iC2f?cE$0$Vd"
});
