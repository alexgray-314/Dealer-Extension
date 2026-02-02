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
stmt: definition | move | on_action | on_move | for | if | assign | 'cancel';

assign: ID '=' term;
definition: 'define' ('area' | 'action' | 'int' | 'string') ID ;
move: 'move' (CARD | position) position;
on_action: 'on' ID '{' stmts '}';
on_move: 'on' 'move' move_catch move_catch '{' stmts '}';
for: 'for' ID 'in' set '{' stmts '}';
if: 'if' bexpr '{' stmts '}'
    | 'if' bexpr '{' stmts '}' 'else' '{' stmts '}';

player: '<' (aexpr | '/' | '.' | '@') '>';

arearef: ID | player;
position: arearef '[' aexpr ',' aexpr ']';

term: aexpr | position | ID | player;

bexpr: term ('==' | '!=' | '<<' | '<=' | '>=' | '>>') term;
aexpr: ID | NUMBER;

set: intset | positionset | playerset;
intset: aexpr ':' aexpr;
positionset: arearef '[' aexpr ':' aexpr ',' aexpr ':' aexpr ']';
playerset: '<' '*' '>';

move_catch: '?' | position ;
