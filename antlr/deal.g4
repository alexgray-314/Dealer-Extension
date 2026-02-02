grammar deal;	

COMMENT: '//' ~[\r\n]* -> skip;
SPACES: [\t\r\n ]+ -> skip;
NEWLINE: [\r\n]+ -> skip;

prog: stmt* EOF ;
stmt: (definition | move | on_action | on_move | for | if | assign | 'cancel') ';';

player: '<' ('/' | '.' | '@' | aexpr) '>';

assign: ID '=' term;
definition: 'define' ('area' | 'action' | 'int' | 'card') ID args ;
move: 'move' (CARD | position | positionset) position;
on_action: 'on' ID '{' stmt* '}';
on_move: 'on' 'move' move_catch move_catch '{' stmt* '}';
for: 'for' ID 'in' set '{' stmt* '}';
if: 'if' bexpr '{' stmt* '}' 'else' '{' stmt* '}'
    | 'if' bexpr '{' stmt* '}';
// updateTurn: '<' '.' '>'  ( '++' | '=' player)  ; // this is being weird

args: ('(' (arg (',' arg)*)? ')')? ;
arg: ID ':' (STRING | NUMBER) ;

arearef: ID | player;
position: arearef '[' aexpr ',' aexpr ']';

term: aexpr | player | position | '\\' | '/' | property;
property: (CARD | player | position) '.' ID;

bexpr: term ('==' | '!=' | '<<' | '<=' | '>=' | '>>') term;
aexpr: ID | NUMBER;

set: intset | positionset | playerset;
intset: aexpr ':' aexpr;
positionset: arearef '[' aexpr ':' aexpr ',' aexpr ':' aexpr ']';
playerset: '<' '*' '>';

move_catch: '?' | position | positionset;

NUMBER: [0-9]+ ;
ID: [a-zA-Z]+ ;
CARD: '#' ('10'|[2-9]|[JjQqKkAa]) [CcHhDdSs] ;
STRING: '"' [A-Za-z ]* '"';