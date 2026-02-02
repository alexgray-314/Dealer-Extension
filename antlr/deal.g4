grammar deal;	

COMMENT: '//' ~[\r\n]* -> skip;
SPACES: [\t\r\n ]+ -> skip;
NEWLINE: [\r\n]+ -> skip;

prog: stmt* EOF ;
stmt: (definition | move | on_action | on_move | for | if | assign | 'cancel') ';';

player: '<' ('/' | '.' | '@' | aexpr) '>';

assign: ID '=' term;
definition: 'define' ('area' | 'action' | 'int' | 'string') ID ;
move: 'move' (CARD | position) position;
on_action: 'on' ID '{' stmt* '}';
on_move: 'on' 'move' move_catch move_catch '{' stmt* '}';
for: 'for' ID 'in' set '{' stmt* '}';
if: 'if' bexpr '{' stmt* '}' 'else' '{' stmt* '}'
    | 'if' bexpr '{' stmt* '}';



arearef: ID | player;
position: arearef '[' aexpr ',' aexpr ']';

term: aexpr | player | position ;

bexpr: term ('==' | '!=' | '<<' | '<=' | '>=' | '>>') term;
aexpr: ID | NUMBER;

set: intset | positionset | playerset;
intset: aexpr ':' aexpr;
positionset: arearef '[' aexpr ':' aexpr ',' aexpr ':' aexpr ']';
playerset: '<' '*' '>';

move_catch: '?' | position ;

NUMBER: [0-9]+ ;
ID: [a-zA-Z]+ ;
CARD: '#' ('10'|[2-9]|[JjQqKkAa]) [CcHhDdSs] ;