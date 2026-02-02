grammar deal;	

prog: stmt EOF ;
stmt: definition;
definition: 'define' TYPE ID ;

expr:	expr ('*'|'/') expr
    |	expr ('+'|'-') expr
    |	NUMBER
    |	'(' expr ')'
    ;

TYPE: 'area' | 'action' | 'int' | 'string';

NUMBER: [0-9]+ ;
ID: [a-zA-Z]+ ;

SPACES: [\t\r\n ]+ -> skip;
NEWLINE: [\r\n]+ -> skip;