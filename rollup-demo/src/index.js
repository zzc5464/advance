import a from './a';
import {version} from '../package.json';
import answer from 'the-answer';
import _ from 'lodash';

const data = {
  a: '1'
}
const {person = '',big = ''} = data
console.log(answer,_);
