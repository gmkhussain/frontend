/*! 
* Kodeized v5.0
* Coding made effortless.
* This file contains works for many various kinds of tasks 
*/

import VarFunc, { htmlTag, bodyTag } from './util/_var.js';

import activeUrl from './util/_activeUrl';
import mockupMatch from './util/_mockupMatch.js';


VarFunc();

activeUrl('.nav-link'); // optional params
mockupMatch();

console.log( htmlTag, bodyTag );
bodyTag.classList.add("loaded")
