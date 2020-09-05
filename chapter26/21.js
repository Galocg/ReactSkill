import Post from ‘../../models/post‘;
import mongoose from ‘mongoose‘;
import Joi from ‘joi‘;
import sanitizeHtml from ‘sanitize-html‘;


const { ObjectId } = mongoose.Types;



const sanitizeOption = {
  allowedTags: [
    ‘h1‘,
    ‘h2‘,
    ‘b‘,
    ‘i‘,
    ‘u‘,
    ‘s‘,
    ‘p‘,
    ‘ul‘,
    ‘ol‘,
    ‘li‘,
    ‘blockquote‘,
    ‘a‘,
    ‘img‘,
  ],
  allowedAttributes: {
    a: [‘href‘, ‘name‘, ‘target‘],
    img: [‘src‘],
    li: [‘class‘],
  },
  allowedSchemes: [‘data‘, ‘http‘],
};
(…)