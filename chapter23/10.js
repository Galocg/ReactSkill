import mongoose, { Schema } from ‘mongoose‘;
import bcrypt from ‘bcrypt‘;
import jwt from ‘jsonwebtoken‘;


(…)



UserSchema.methods.generateToken = function() {
  const token = jwt.sign(
    // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣습니다.
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET, // 두 번째 파라미터에는 JWT 암호를 넣습니다.
    {
      expiresIn: ‘7d‘, // 7일 동안 유효함
    },
  );
  return token;
};