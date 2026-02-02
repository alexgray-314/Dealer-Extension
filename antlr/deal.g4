grammar deal;	

COMMENT: '//' ~[\r\n]* -> skip;
SPACES: [\t\r\n ]+ -> skip;
NEWLINE: [\r\n]+ -> skip;
SEMI_COLON: ';' -> skip;

NUMBER: [0-9]+ ;
ID: [a-zA-Z]+ ;
CARD: '#' ('10'|[2-9]|[JjQqKkAa]) [CcHhDdSs] ;

prog: stmts EOF ;
stmts: stmt stmts | ; // nullable
stmt: definition | move | on_action | on_move | for | if | 'cancel';

definition: 'define' ('area' | 'action' | 'int' | 'string') ID ;
move: 'move' (CARD | position) position;
on_action: 'on' ID '{' stmts '}';
on_move: 'on' 'move' move_catch move_catch '{' stmts '}';
for: 'for' ID 'in' set '{' stmts '}';
if: 'if' bexpr '{' stmts '}'
    | 'if' bexpr '{' stmts '}' 'else' '{' stmts '}';

player: '<' (NUMBER | '/' | '.' | '@') '>';

arearef: ID | player;
position: arearef '[' NUMBER ',' NUMBER ']';

term: NUMBER | position | ID;

bexpr: term ('==' | '!=' | '<<' | '<=' | '>=' | '>>') term;

set: intset;
intset: NUMBER ':' NUMBER;

move_catch: '?' | position ;
