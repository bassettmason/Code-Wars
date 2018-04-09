The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.

first problem was it wasn't global so I added the g
next still didn't work so I tested using o instead of .
worked
so I looked up on stack that symbols don't work unless you "exit the string" 
pretty much it means put it in brackets so it knows your talking about . in a string reference

https://www.codewars.com/kata/fixme-replace-all-dots

