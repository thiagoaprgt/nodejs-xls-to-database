# importando-xls-para-o-banco-de-dados-usando-o-NodeJS
Importando um xls para o banco de dados usando o Node JS


Apresentação da aplicação node js


Parte 1: Instalando o node

	Para garantir que não haja problemas com o node no ubuntu desinstale o node

		comando: sudo apt remove --purge nodejs

	Agora instale o nvm (node version manager):

		comando: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
		
	instale a versão do node que você quer usar: 

		comando: nvm install vX.X.X
		No meu caso eu usuarei a versão 18.15.0 -> comando: nvm install v18.15.0


Parte 2: Criando um projeto nodejs

	Dentro da pasta onde será feito o projeto inicie o node
	
		comando: npm init
		

Parte 3: Projeto importação do xls para o banco de dados

	Bibliotecas usadas:
		sequelize com o driver mysql2: Persistir a planilha no banco de dados;	

		xlsx (url: npmjs.com/package/xlsx ): Ler o arquivo xls;
		
		mysql2 (url: https://www.npmjs.com/package/mysql2) : comunicar com o banco de dados

		mysql2 (github: https://github.com/mysqljs/mysql) : comunicar com o banco de dados
		
		comando de instalação das bibliotecas e drivers:
			npm install sequelize
			npm install mysql2
			npm install xlsx
			
Agora é só construir a aplicação


