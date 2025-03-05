import crypto from 'crypto';
import { buffer } from 'stream/consumers';
const algorithm = "abc-256-cbc";
const secretKey = crypto.rendomBytes(32);
const iv = crypto.randomBytes(16);

export const encryptedData = (data)=>{
     const cipher = crypto.createCipheriv(algorithm , buffer.from(secretKey) , iv);
      let encrypted = cipher.update(data,'utf-8' ,'hex');
      encrypted+= cipher.final('hex');
      return encrypted;
};
