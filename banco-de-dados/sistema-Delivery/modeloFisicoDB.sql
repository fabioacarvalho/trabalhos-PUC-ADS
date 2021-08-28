#Criando as Tabelas Modelo Físico:
DROP database if exists Delivery;
create database Delivery;


create table Delivery.Cliente(
	codCliente int primary key auto_increment,
    nome varchar(50) not null,
    endereco varchar(50) not null,
    telefone int not null
);

create table Delivery.Cardapio(
	codCardapio int primary key auto_increment,
    nome varchar(45),
    preco decimal(6,2)
);

create table Delivery.Entregador(
	codEntregador int primary key auto_increment,
    nome varchar(45) not null,
    telefone int not null
);

create table Delivery.Pedido(
	codPedido int primary key auto_increment,
    quantidade int not null,
    valorTotal decimal not null,
    dia datetime not null,
    status varchar(45),
    codEntregador int,
    foreign key(codEntregador) REFERENCES Entregador(codEntregador)
);


create table Delivery.CardapioPedido(
	codCardapio int,
    codPedido int,
    foreign key(codCardapio) REFERENCES Cardapio(codCardapio),
    foreign key(codPedido) REFERENCES Pedido(codPedido)
);

create table Delivery.PedidoCliente(
	codCliente int,
    codPedido int,
    foreign key(codCliente) REFERENCES Cliente(codCliente),
    foreign key(codPedido) REFERENCES Pedido(codPedido)
);

