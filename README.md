БЭК ДЛЯ ОНЛАЙН-БИБИЛОТЕКИ

В БД должны фигурировать книги, жанры книг, отзывы о книге, клиенты, администратор. (модель для админа не нужна, он будет указыватсья при помощи роутов. То есть в функционал админа будет доступен только через роуты /admin/… и тд)

Функционал админа:

 - все CRUD операции с книгами
 - все CRUD операции с жанрами
 - отобрать книгу у клиента, с его последующей блокировкой


Функционал клиента:

 - просматривать все книги
 - просматривать все книги по определенному жанру
 - просматривать определенную книгу
 - оставлять отзыв на определенную книгу
 - брать книгу в аренду (не более 3-х за один раз)
 - возвращать книгу


Подсказки:

 - у пользователя должен быть ключ isBlocked, который показывает заблокирован ли пользователь или нет. Заблокированный пользователь не может брать книгу в аренду
 - у книг должен быть ключ который содержит в себе id пользователя, который арендует книгу в данный момент. Если никто не арендует, то ключ должен быть пустым
 - если книга уже арендована, ее нельзя будет арендовать, пока ее не вернут
 - если пользователь не может арендовать книгу, нужно вернуть сообщение с причиной: "вы заблокированы", "нельзя арендовать больше 3-х книг одновременно", "эта книга уже арендована другим пользователем" и т.п.
 - если администратор отбирает книгу у пользователя, пользователь автоматически блокируется