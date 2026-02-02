grammar deal;	

prog: stmt* EOF ;
stmt: definition | move;

definition: 'define' VARTYPE ID ;
move: 'move' (CARD | position) position;

position: ID '[' NUMBER ',' NUMBER ']';

VARTYPE: 'area' | 'action' | 'int' | 'string';

NUMBER: [0-9]+ ;
ID: [a-zA-Z]+ ;

CARD: '#' ('10'|[2-9]|[JjQqKkAa]) [CcHhDdSs] ;

SPACES: [\t\r\n ]+ -> skip;
NEWLINE: [\r\n]+ -> skip;