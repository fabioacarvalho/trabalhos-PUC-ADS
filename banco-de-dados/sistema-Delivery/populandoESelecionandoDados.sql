#Populando as tabelas:
insert into Delivery.Cliente(nome, endereco, telefone) values  
	("Pedro", "Rua Azulada", "123456789"),
    ("Joao", "Rua de Paris", "123456789"),
	("Carlos", "Rua Luz da Paz", "123456789");
    
insert into Delivery.Cardapio(nome, preco) values
	("Misto quente", 4.99),
    ("Bauru", 3.99);
    
insert into Delivery.Entregador(nome, telefone) values
	("jose", 419985878),
    ("pedro", 419933878);

insert into Delivery.Pedido(quantidade, valorTotal, dia, status, codEntregador) values
	(2, 7.98, 21/12/05, 1, 2),
    (1, 4.99, 21/12/10, 2, 1),
    (1, 4.99, 21/08/11, 0, 1),
    (1, 4.99, 21/08/12, 0, 1);
    
insert into Delivery.Pedido(quantidade, valorTotal, dia, status, codEntregador) values
    (1, 14.99, 21/08/12, 0, 1);
    
insert into Delivery.CardapioPedido values
	(1, 1),
    (1, 2),
    (1, 3),
    (1, 4);

insert into Delivery.PedidoCliente values
	(1, 1),
    (1, 2),
    (2, 3),
    (1, 4);

#Selecionando dados com filtro por status:
select * from Delivery.Pedido where status = 0;

#Selecionar apenas os que estao com o status = 0 e juntando com cliente:
select * from (Delivery.Pedido JOIN Delivery.Cliente) where status = 0;