{
	ER_HASHCHK:[
		'hashchk',
		'hashchk'
	],
	ER_NISAMCHK:[
		'isamchk',
		'isamchk'
	],
	ER_NO:[
		'NO',
		'NO'
	],
	ER_YES:[
		'YES',
		'YES'
	],
	ER_CANT_CREATE_FILE:[
		"Can't create file %s (errno: %d)",
		'无法创建文件%0 (errno: %1)'
	],
	ER_CANT_CREATE_TABLE:[
		"Can't create table %s (errno: %d)",
		'无法创建表%0 (errno: %1)'
	],
	ER_CANT_CREATE_DB:[
		"Can't create database %s (errno: %d)",
		'无法创建数据库%0 (errno: %1)'
	],
	ER_DB_CREATE_EXISTS:[
		"Can't create database %s; database exists",
		'无法创建数据库%0,数据库已存在.'
	],
	ER_DB_DROP_EXISTS:[
		"Can't drop database %s; database doesn't exist",
		'无法删除数据库%0,数据库不存在.'
	],
	ER_DB_DROP_DELETE:[
		"Error dropping database (can't delete %s, errno: %d)",
		'删除数据库时出错（无法删除%s,errno: %d）'
	],
	ER_DB_DROP_RMDIR:[
		"Error dropping database (can't rmdir %s, errno: %d)",
		"删除数据库时出错（can't rmdir %s, errno: %d）"
	],
	ER_CANT_DELETE_FILE:[
		'Error on delete of %s (errno: %d)',
		'删除%s时出错 (errno: %d)'
	],
	ER_CANT_FIND_SYSTEM_REC:[
		"Can't read record in system table",
		'无法读取系统表中的记录.'
	],
	ER_CANT_GET_STAT:[
		"Can't get status of %s (errno: %d)",
		'无法获取%s的状态(errno: %d)'
	],
	ER_CANT_GET_WD:[
		"Can't get working directory (errno: %d)",
		'无法获得工作目录(errno: %0)'
	],
	ER_CANT_LOCK:[
		"Can't lock file (errno: %d)",
		'无法锁定文件(errno: %0)'
	],
	ER_CANT_OPEN_FILE:[
		"Can't open file: %s (errno: %d)",
		'无法打开文件: %0 (errno: %1)'
	],
	ER_FILE_NOT_FOUND:[
		"Can't find file: %s (errno: %d)",
		'无法找到文件:  %0 (errno: %1)'
	],
	ER_CANT_READ_DIR:[
		"Can't read dir of %s (errno: %d)",
		'无法读取%s的目录 (errno: %d)'
	],
	ER_CANT_SET_WD:[
		"Can't change dir to %s (errno: %d)",
		'无法为%s更改目录 (errno: %d)'
	],
	ER_CHECKREAD:[
		'Record has changed since last read in table %s',
		'自上次读取以来表%0中的记录已改变.'
	],
	ER_DISK_FULL:[
		'Disk full (%s); waiting for someone to free some space...',
		'磁盘满(%0)；等待某人释放一些空间...'
	],
	ER_DUP_KEY:[
		"Can't write; duplicate key in table %s",
		'无法写入；复制表%0的 键.'
	],
	ER_ERROR_ON_CLOSE:[
		'Error on close of %s (errno: %d)',
		'关闭%s时出错 (errno: %d)'
	],
	ER_ERROR_ON_READ:[
		'Error reading file %s (errno: %d)',
		'读取文件%s时出错 (errno: %d)'
	],
	ER_ERROR_ON_RENAME:[
		'Error on rename of %s to %s (errno: %d)',
		'将%s重命名为%s时出错 (errno: %d)'
	],
	ER_ERROR_ON_WRITE:[
		'Error writing file %s (errno: %d)',
		'写入文件%0时出错 (errno: %1)'
	],
	ER_FILE_USED:[
		'%s is locked against change',
		'%0已锁定,拒绝更改.'
	],
	ER_FILSORT_ABORT:[
		'Sort aborted',
		'分类失败'
	],
	ER_FORM_NOT_FOUND:[
		"View %s doesn't exist for %s",
		'对于%1,视图%0不存在.'
	],
	ER_GET_ERRNO:[
		'Got error %d from storage engine',
		'从存储引擎中获得错误%0.'
	],
	ER_ILLEGAL_HA:[
		"Table storage engine for %s doesn't have this option",
		'关于%0的表存储引擎不含该选项.'
	],
	ER_KEY_NOT_FOUND:[
		"Can't find record in %s",
		'无法在%0中找到记录.'
	],
	ER_NOT_FORM_FILE:[
		'Incorrect information in file: %s',
		'文件中的不正确信息: %0'
	],
	ER_NOT_KEYFILE:[
		'Incorrect key file for table %s; try to repair it',
		'对于表%0, 键文件不正确,请尝试修复.'
	],
	ER_OLD_KEYFILE:[
		'Old key file for table %s; repair it!',
		'旧的键文件,对于表%0,请修复之！'
	],
	ER_OPEN_AS_READONLY:[
		'Table %s is read only',
		'表%0是只读的.'
	],
	ER_OUTOFMEMORY:[
		'Out of memory; restart server and try again (needed %d bytes)',
		'内存溢出,重启服务器并再次尝试（需要%0字节）.'
	],
	ER_OUT_OF_SORTMEMORY:[
		'Out of sort memory, consider increasing server sort buffer size',
		'分类内存溢出,增加服务器的分类缓冲区大小.'
	],
	ER_UNEXPECTED_EOF:[
		'Unexpected EOF found when reading file %s (errno: %d)',
		'读取文件%0时出现意外EOF (errno: %1)'
	],
	ER_CON_COUNT_ERROR:[
		'Too many connections',
		'连接过多.'
	],
	ER_OUT_OF_RESOURCES:[
		"Out of memory; check if mysqld or some other process uses all available memory; if not, you may have to use 'ulimit' to allow mysqld to use more memory or you can add more swap space",
		'内存溢出,请检查是否mysqld或其他进程使用了所有可用内存,如不然,或许应使用 ulimit 允许mysqld使用更多内存,或增加交换空间的大小.'
	],
	ER_BAD_HOST_ERROR:[
		"Can't get hostname for your address",
		'无法获得该地址给出的主机名.'
	],
	ER_HANDSHAKE_ERROR:[
		'Bad handshake',
		'不良握手'
	],
	ER_DBACCESS_DENIED_ERROR:[
		'Access denied for user %s@%s to database %s',
		'拒绝用户 %0@%1 访问数据库 %2.'
	],
	ER_ACCESS_DENIED_ERROR:[
		'Access denied for user %s@%s (using password: %s)',
		'拒绝用户 %0@%1 的访问(使用密码: ***)'
	],
	ER_NO_DB_ERROR:[
		'No database selected',
		'未选择数据库.'
	],
	ER_UNKNOWN_COM_ERROR:[
		'Unknown command',
		'未知命令.'
	],
	ER_BAD_NULL_ERROR:[
		'Column %s cannot be null',
		'列 %0 不能为空.'
	],
	ER_BAD_DB_ERROR:[
		'Unknown database %s',
		'未知数据库 %0.'
	],
	ER_TABLE_EXISTS_ERROR:[
		'Table %s already exists',
		'表 %0 已存在.'
	],
	ER_BAD_TABLE_ERROR:[
		'Unknown table %s',
		'未知表 %0.'
	],
	ER_NON_UNIQ_ERROR:[
		'Column %s in %s is ambiguous',
		'%1 中的列 %0 不明确.'
	],
	ER_SERVER_SHUTDOWN:[
		'Server shutdown in progress',
		'在操作过程中服务器关闭.'
	],
	ER_BAD_FIELD_ERROR:[
		'Unknown column %s in %s',
		'%1 中的未知列 %0.'
	],
	ER_WRONG_FIELD_WITH_GROUP:[
		"%s isn't in GROUP BY",
		'%0 不在GROUP BY中.'
	],
	ER_WRONG_GROUP_FIELD:[
		"Can't group on %s",
		'无法在 %0 上创建组.'
	],
	ER_WRONG_SUM_SELECT:[
		'Statement has sum functions and columns in same statement',
		'语句中有sum函数和相同语句中的列.'
	],
	ER_WRONG_VALUE_COUNT:[
		"Column count doesn't match value count",
		'列计数不匹配值计数.'
	],
	ER_TOO_LONG_IDENT:[
		'Identifier name %s is too long',
		'ID名称 %0 过长.'
	],
	ER_DUP_FIELDNAME:[
		'Duplicate column name %s',
		'重复列名 %0.'
	],
	ER_DUP_KEYNAME:[
		'Duplicate key name %s',
		'重复键名称 %0.'
	],
	ER_DUP_ENTRY:[
		'Duplicate entry %s for key %s',
		'重复数据%0 在 %1.'
	],
	ER_WRONG_FIELD_SPEC:[
		'Incorrect column specifier for column %s',
		'对于列%0,列分类符不正确.'
	],
	ER_PARSE_ERROR:[
		'%s near %s at line %d',
		'在行%d上,%s靠近%s.'
	],
	ER_EMPTY_QUERY:[
		'Query was empty',
		'查询为空.'
	],
	ER_NONUNIQ_TABLE:[
		'Not unique table/alias: %s',
		'非唯一的表/别名: %0'
	],
	ER_INVALID_DEFAULT:[
		'Invalid default value for %s',
		'关于 %0 的无效默认值.'
	],
	ER_MULTIPLE_PRI_KEY:[
		'Multiple primary key defined',
		'定义了多个主键.'
	],
	ER_TOO_MANY_KEYS:[
		'Too many keys specified; max %d keys allowed',
		'指定了过多键: 允许的最大键数是%0.'
	],
	ER_TOO_MANY_KEY_PARTS:[
		'Too many key parts specified; max %d parts allowed',
		'指定了过多键部分: 允许的最大键部分是 %0.'
	],
	ER_TOO_LONG_KEY:[
		'Specified key was too long; max key length is %d bytes',
		'指定的键过长,最大键长度是%0字节.'
	],
	ER_KEY_COLUMN_DOES_NOT_EXITS:[
		"Key column %s doesn't exist in table",
		'键列 %0 在表中不存在.'
	],
	ER_BLOB_USED_AS_KEY:[
		"BLOB column %s can't be used in key specification with the used table type",
		'BLOB列 %0 不能与已使用的表类型用在 键说明中.'
	],
	ER_TOO_BIG_FIELDLENGTH:[
		'Column length too big for column %s (max = %lu); use BLOB or TEXT instead',
		'对于列%0,列长度过大 (max = %1),请使用BLOB或TEXT取而代之.'
	],
	ER_WRONG_AUTO_KEY:[
		'Incorrect table definition; there can be only one auto column and it must be defined as a key',
		'不正确的表定义,只能有1个auto列,而且必须将其定义为 键.'
	],
	ER_READY:[
		'%s: ready for connections. Version: %s socket: %s port: %d',
		'%s,连接就绪.版本: %s,套接字: %s,端口: %d'
	],
	ER_NORMAL_SHUTDOWN:[
		'%s: Normal shutdown',
		'%0,正常关闭.'
	],
	ER_GOT_SIGNAL:[
		'%s: Got signal %d. Aborting!',
		'%0: 获得信号%1.放弃！'
	],
	ER_SHUTDOWN_COMPLETE:[
		'%s: Shutdown complete',
		'%0,关闭完成'
	],
	ER_FORCING_CLOSE:[
		'%s: Forcing close of thread %ld user: %s',
		'%0,强制关闭线程%1,用户: %2'
	],
	ER_IPSOCK_ERROR:[
		"Can't create IP socket",
		'无法创建IP套接字'
	],
	ER_NO_SUCH_INDEX:[
		'Table %s has no index like the one used in CREATE INDEX; recreate the table',
		'表 %0 中没有与CREATE INDEX中索引类似的索引,重新创建表.'
	],
	ER_WRONG_FIELD_TERMINATORS:[
		'Field separator argument is not what is expected; check the manual',
		'字段分隔符参量不是预期的,请参考手册.'
	],
	ER_BLOBS_AND_NO_TERMINATED:[
		"You can't use fixed rowlength with BLOBs; please use 'fields terminated by'",
		"不能与BLOB一起使用固定行长度,请使用'fields terminated by'."
	],
	ER_TEXTFILE_NOT_READABLE:[
		'The file %s must be in the database directory or be readable by all',
		'文件 %0 必须在数据库目录下,或能被所有人读取.'
	],
	ER_FILE_EXISTS_ERROR:[
		'File %s already exists',
		'文件 %0 已存在.'
	],
	ER_LOAD_INFO:[
		'Records: %ld Deleted: %ld Skipped: %ld Warnings: %ld',
		'记录: %0 已删除: %1 已跳过: %2 警告: %3'
	],
	ER_ALTER_INFO:[
		'Records: %ld Duplicates: %ld',
		'记录: %0 重复: %1'
	],
	ER_WRONG_SUB_KEY:[
		"Incorrect prefix key; the used key part isn't a string, the used length is longer than the key part, or the storage engine doesn't support unique prefix keys",
		'不正确的子部分键,使用的键部分不是字符串,所用的长度长于键部分,或存储引擎不支持唯一子键.'
	],
	ER_CANT_REMOVE_ALL_FIELDS:[
		"You can't delete all columns with ALTER TABLE; use DROP TABLE instead",
		'不能用ALTER TABLE删除所有列,请使用DROP TABLE取而代之.'
	],
	ER_CANT_DROP_FIELD_OR_KEY:[
		"Can't DROP %s; check that column/key exists",
		'不能删除%0,请检查列/键是否存在.'
	],
	ER_INSERT_INFO:[
		'Records: %ld Duplicates: %ld Warnings: %ld',
		'记录: %0 复制: %1 告警: %2'
	],
	ER_UPDATE_TABLE_USED:[
		"You can't specify target table %s for update in FROM clause",
		'不能在FROM子句中制定要更新的目标表 %0.'
	],
	ER_NO_SUCH_THREAD:[
		'Unknown thread id: %lu',
		'未知线程ID: %0'
	],
	ER_KILL_DENIED_ERROR:[
		'You are not owner of thread %lu',
		'你不是线程 %0 的所有者.'
	],
	ER_NO_TABLES_USED:[
		'No tables used',
		'未使用任何表.'
	],
	ER_TOO_BIG_SET:[
		'Too many strings for column %s and SET',
		'列 %0 和SET的字符串过多.'
	],
	ER_NO_UNIQUE_LOGFILE:[
		"Can't generate a unique log-filename %s.(1-999)",
		'不能生成唯一的日志文件名%0.(1-999)'
	],
	ER_TABLE_NOT_LOCKED_FOR_WRITE:[
		"Table %s was locked with a READ lock and can't be updated",
		'表 %0 已用READ锁定,不能更新.'
	],
	ER_TABLE_NOT_LOCKED:[
		'Table %s was not locked with LOCK TABLES',
		'未使用LOCK TABLES锁定表 %0.'
	],
	ER_BLOB_CANT_HAVE_DEFAULT:[
		"BLOB/TEXT column %s can't have a default value",
		'BLOB/TEXT列 %0 不能有默认值.'
	],
	ER_WRONG_DB_NAME:[
		'Incorrect database name %s',
		'不正确的数据库名 %0.'
	],
	ER_WRONG_TABLE_NAME:[
		'Incorrect table name %s',
		'不正确的表名 %0.'
	],
	ER_TOO_BIG_SELECT:[
		'The SELECT would examine more than MAX_JOIN_SIZE rows; check your WHERE and use SET SQL_BIG_SELECTS=1 or SET MAX_JOIN_SIZE=# if the SELECT is okay',
		'SELECT将检查超过MAX_JOIN_SIZE的行,如果SELECT正常,请检查WHERE,并使用SET SQL_BIG_SELECTS=1或SET SQL_MAX_JOIN_SIZE=#.'
	],
	ER_UNKNOWN_ERROR:[
		'Unknown error',
		'未知错误.'
	],
	ER_UNKNOWN_PROCEDURE:[
		'Unknown procedure %s',
		'未知过程%0'
	],
	ER_WRONG_PARAMCOUNT_TO_PROCEDURE:[
		'Incorrect parameter count to procedure %s',
		'对于过程%0,参数计数不正确'
	],
	ER_WRONG_PARAMETERS_TO_PROCEDURE:[
		'Incorrect parameters to procedure %s',
		'对于过程%0,参数不正确'
	],
	ER_UNKNOWN_TABLE:[
		'Unknown table %s in %s',
		'%s中的未知表%s'
	],
	ER_FIELD_SPECIFIED_TWICE:[
		'Column %s specified twice',
		'列 %0 被指定了两次.'
	],
	ER_INVALID_GROUP_FUNC_USE:[
		'Invalid use of group function',
		'无效的分组函数使用'
	],
	ER_UNSUPPORTED_EXTENSION:[
		"Table %s uses an extension that doesn't exist in this MySQL version",
		'表 %0 使用了该MySQL版本中不存在的扩展.'
	],
	ER_TABLE_MUST_HAVE_COLUMNS:[
		'A table must have at least 1 column',
		'1个表至少要有1列.'
	],
	ER_RECORD_FILE_FULL:[
		'The table %s is full',
		'表 %0 已满.'
	],
	ER_UNKNOWN_CHARACTER_SET:[
		'Unknown character set: %s',
		'未知字符集 %0.'
	],
	ER_TOO_MANY_TABLES:[
		'Too many tables; MySQL can only use %d tables in a join',
		'表过多,MySQL在1个联合操作中只能使用 %0 个表.'
	],
	ER_TOO_MANY_FIELDS:[
		'Too many columns',
		'列过多.'
	],
	ER_TOO_BIG_ROWSIZE:[
		'Row size too large. The maximum row size for the used table type, not counting BLOBs, is %ld. You have to change some columns to TEXT or BLOBs',
		'行的大小过大.对于所使用的表类型,不包括BLOB,最大行大小为 %0.必须将某些列更改为TEXT或BLOB.'
	],
	ER_STACK_OVERRUN:[
		"Thread stack overrun: Used: %ld of a %ld stack. Use 'mysqld --thread_stack=#' to specify a bigger stack if needed",
		"线程堆栈溢出,已使用: %ld堆栈的%ld.如果需要,请使用'mysqld -O thread_stack=#'指定较大的堆栈."
	],
	ER_WRONG_OUTER_JOIN:[
		'Cross dependency found in OUTER JOIN; examine your ON conditions',
		'在OUTER JOIN中发现交叉关联,请检查ON条件.'
	],
	ER_NULL_COLUMN_IN_INDEX:[
		"Table handler doesn't support NULL in given index. Please change column %s to be NOT NULL or use another handler",
		'列 %0 与UNIQUE或INDEX一起使用,但未定义为NOT NULL.'
	],
	ER_CANT_FIND_UDF:[
		"Can't load function %s",
		'无法加载函数 %0.'
	],
	ER_CANT_INITIALIZE_UDF:[
		"Can't initialize function %s; %s",
		'无法初始化函数%s; %s'
	],
	ER_UDF_NO_PATHS:[
		'No paths allowed for shared library',
		'对于共享库,不允许任何路径.'
	],
	ER_UDF_EXISTS:[
		'Function %s already exists',
		'函数 %0 已存在.'
	],
	ER_CANT_OPEN_LIBRARY:[
		"Can't open shared library %s (errno: %d %s)",
		'不能打开共享库%s (errno: %d %s)'
	],
	ER_CANT_FIND_DL_ENTRY:[
		"Can't find symbol %s in library",
		'不能发现库中的符号 %0.'
	],
	ER_FUNCTION_NOT_DEFINED:[
		'Function %s is not defined',
		'函数 %0 未定义.'
	],
	ER_HOST_IS_BLOCKED:[
		"Host %s is blocked because of many connection errors; unblock with 'mysqladmin flush-hosts'",
		"由于存在很多连接错误,主机%s被屏蔽,请用'mysqladmin flush-hosts'解除屏蔽."
	],
	ER_HOST_NOT_PRIVILEGED:[
		'Host %s is not allowed to connect to this MySQL server',
		'不允许将主机 %0 连接到该MySQL服务器.'
	],
	ER_PASSWORD_ANONYMOUS_USER:[
		'You are using MySQL as an anonymous user and anonymous users are not allowed to change passwords',
		'你正在已匿名用户身份使用MySQL,不允许匿名用户更改密码.'
	],
	ER_PASSWORD_NOT_ALLOWED:[
		'You must have privileges to update tables in the mysql database to be able to change passwords for others',
		'必须有更新mysql数据库中表的权限才能更改密码.'
	],
	ER_PASSWORD_NO_MATCH:[
		"Can't find any matching row in the user table",
		'无法在用户表中找到匹配行.'
	],
	ER_UPDATE_INFO:[
		'Rows matched: %ld Changed: %ld Warnings: %ld',
		'行匹配: %ld 已更改: %ld 警告: %ld'
	],
	ER_CANT_CREATE_THREAD:[
		"Can't create a new thread (errno %d); if you are not out of available memory, you can consult the manual for a possible OS-dependent bug",
		'无法创建新线程(errno %0),如果未出现内存溢出,请参阅手册以了解可能的与操作系统有关的缺陷.'
	],
	ER_WRONG_VALUE_COUNT_ON_ROW:[
		"Column count doesn't match value count at row %ld",
		'列计数不匹配行 %0 上的值计数.'
	],
	ER_CANT_REOPEN_TABLE:[
		"Can't reopen table: %s",
		'无法再次打开表 %0.'
	],
	ER_INVALID_USE_OF_NULL:[
		'Invalid use of NULL value',
		'NULL值使用无效.'
	],
	ER_REGEXP_ERROR:[
		'Got error %s from regexp',
		'获得来自regexp的错误 %0.'
	],
	ER_MIX_OF_GROUP_FUNC_AND_FIELDS:[
		'Mixing of GROUP columns (MIN(),MAX(),COUNT(),...) with no GROUP columns is illegal if there is no GROUP BY clause',
		'如果没有GROUP BY子句,GROUP列 (MIN(),MAX(),COUNT(),...)与非GROUP列的混合不合法.'
	],
	ER_NONEXISTING_GRANT:[
		'There is no such grant defined for user %s on host %s',
		'用户 %0 未在主机 %1 上授予相应权限'
	],
	ER_TABLEACCESS_DENIED_ERROR:[
		'%s command denied to user %s@%s for table %s',
		'拒绝用户%s@%s在表%s上使用%s命令.'
	],
	ER_COLUMNACCESS_DENIED_ERROR:[
		'%s command denied to user %s@%s for column %s in table %s',
		'拒绝用户%s@%s在表%s的%s上使用%s命令.'
	],
	ER_ILLEGAL_GRANT_FOR_TABLE:[
		'Illegal GRANT/REVOKE command; please consult the manual to see which privileges can be used',
		'非法GRANT/REVOKE命令,请参阅手册以了解可使用那种权限.'
	],
	ER_GRANT_WRONG_HOST_OR_USER:[
		'The host or user argument to GRANT is too long',
		'GRANT的主机或用户参量过长.'
	],
	ER_NO_SUCH_TABLE:[
		"Table %s doesn't exist",
		'表 %0 不存在.'
	],
	ER_NONEXISTING_TABLE_GRANT:[
		'There is no such grant defined for user %s on host %s on table %s',
		'在表%s上没有为主机%s上的用户%s定义的这类授权.'
	],
	ER_NOT_ALLOWED_COMMAND:[
		'The used command is not allowed with this MySQL version',
		'所使用的命令在该MySQL版本中不允许.'
	],
	ER_SYNTAX_ERROR:[
		'You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use',
		'存在SQL语法错误,请参阅与你的MySQL版本对应的手册,以了解正确的语法.'
	],
	ER_DELAYED_CANT_CHANGE_LOCK:[
		"Delayed insert thread couldn't get requested lock for table %s",
		'对于表%0,延迟的插入线程不能获得请求的锁定.'
	],
	ER_TOO_MANY_DELAYED_THREADS:[
		'Too many delayed threads in use',
		'使用的延迟线程过多.'
	],
	ER_ABORTING_CONNECTION:[
		'Aborted connection %ld to db: %s user: %s (%s)',
		'与数据库%s和用户%s的连接%ld失败 (%s)'
	],
	ER_NET_PACKET_TOO_LARGE:[
		"Got a packet bigger than 'max_allowed_packet' bytes",
		"获得信息包大于'max_allowed_packet'字节."
	],
	ER_NET_READ_ERROR_FROM_PIPE:[
		'Got a read error from the connection pipe',
		'获得来自连接管道的读错误.'
	],
	ER_NET_FCNTL_ERROR:[
		'Got an error from fcntl()',
		'获得来自fcntl()的错误.'
	],
	ER_NET_PACKETS_OUT_OF_ORDER:[
		'Got packets out of order',
		'获得信息包无序.'
	],
	ER_NET_UNCOMPRESS_ERROR:[
		"Couldn't uncompress communication packet",
		'无法解压缩通信信息包.'
	],
	ER_NET_READ_ERROR:[
		'Got an error reading communication packets',
		'读取通信信息包时出错.'
	],
	ER_NET_READ_INTERRUPTED:[
		'Got timeout reading communication packets',
		'读取通信信息包时出现超时.'
	],
	ER_NET_ERROR_ON_WRITE:[
		'Got an error writing communication packets',
		'写入通信信息包时出错.'
	],
	ER_NET_WRITE_INTERRUPTED:[
		'Got timeout writing communication packets',
		'写入通信信息包时出现超时.'
	],
	ER_TOO_LONG_STRING:[
		"Result string is longer than 'max_allowed_packet' bytes",
		"结果字符串长于'max_allowed_packet'字节."
	],
	ER_TABLE_CANT_HANDLE_BLOB:[
		"The used table type doesn't support BLOB/TEXT columns",
		'所使用的表类型不支持BLOB/TEXT列.'
	],
	ER_TABLE_CANT_HANDLE_AUTO_INCREMENT:[
		"The used table type doesn't support AUTO_INCREMENT columns",
		'所使用的表类型不支持AUTO_INCREMENT列.'
	],
	ER_DELAYED_INSERT_TABLE_LOCKED:[
		"INSERT DELAYED can't be used with table %s because it is locked with LOCK TABLES",
		'由于用LOCK TABLES锁定了表,INSERT DELAYED不能与表 %0 一起使用.'
	],
	ER_WRONG_COLUMN_NAME:[
		'Incorrect column name %s',
		'不正确的列名 %0.'
	],
	ER_WRONG_KEY_COLUMN:[
		"The used storage engine can't index column %s",
		'所使用的存储引擎不能为列 %0 编制索引.'
	],
	ER_WRONG_MRG_TABLE:[
		"Unable to open underlying table which is differently defined or of non-MyISAM type or doesn't exist",
		'MERGE表中的所有表未同等定义.'
	],
	ER_DUP_UNIQUE:[
		"Can't write, because of unique constraint, to table %s",
		'由于唯一性限制,不能写入到表 %0.'
	],
	ER_BLOB_KEY_WITHOUT_LENGTH:[
		'BLOB/TEXT column %s used in key specification without a key length',
		'在未指定键长度的键说明中使用了BLOB/TEXT列 %0.'
	],
	ER_PRIMARY_CANT_HAVE_NULL:[
		'All parts of a PRIMARY KEY must be NOT NULL; if you need NULL in a key, use UNIQUE instead',
		'PRIMARY KEY的所有部分必须是NOT NULL,如果需要为NULL的关键字,请使用UNIQUE取而代之.'
	],
	ER_TOO_MANY_ROWS:[
		'Result consisted of more than one row',
		'结果有1个以上的行组成.'
	],
	ER_REQUIRES_PRIMARY_KEY:[
		'This table type requires a primary key',
		'该表类型要求主键.'
	],
	ER_NO_RAID_COMPILED:[
		'This version of MySQL is not compiled with RAID support',
		'该MySQL版本是未使用RAID支持而编译的.'
	],
	ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE:[
		'You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column',
		'你正在使用安全更新模式,而且试图在不使用WHERE的情况下更新使用了KEY列的表.'
	],
	ER_KEY_DOES_NOT_EXITS:[
		"Key %s doesn't exist in table %s",
		'在表 %1 中,键 %0 不存在.'
	],
	ER_CHECK_NO_SUCH_TABLE:[
		"Can't open table",
		'无法打开表.'
	],
	ER_CHECK_NOT_IMPLEMENTED:[
		"The storage engine for the table doesn't support %s",
		'用于表的引擎不支持 %0.'
	],
	ER_CANT_DO_THIS_DURING_AN_TRANSACTION:[
		'You are not allowed to execute this command in a transaction',
		'不允许在事务中执行该命令.'
	],
	ER_ERROR_DURING_COMMIT:[
		'Got error %d during COMMIT',
		'在COMMIT期间出现错误 %0.'
	],
	ER_ERROR_DURING_ROLLBACK:[
		'Got error %d during ROLLBACK',
		'在ROLLBACK期间出现错误 %0.'
	],
	ER_ERROR_DURING_FLUSH_LOGS:[
		'Got error %d during FLUSH_LOGS',
		'在FLUSH_LOGS期间出现错误 %0.'
	],
	ER_ERROR_DURING_CHECKPOINT:[
		'Got error %d during CHECKPOINT',
		'在CHECKPOINT期间出现错误 %0.'
	],
	ER_NEW_ABORTING_CONNECTION:[
		'Aborted connection %ld to db: %s user: %s host: %s (%s)',
		'与数据库%s、用户%s和主机%s的连接%ld失败 (%s).'
	],
	ER_DUMP_NOT_IMPLEMENTED:[
		'The storage engine for the table does not support binary table dump',
		'针对表的存储引擎不支持二进制表转储.'
	],
	ER_FLUSH_MASTER_BINLOG_CLOSED:[
		'Binlog closed, cannot RESET MASTER',
		'Binlog已关闭,不能RESET MASTER.'
	],
	ER_INDEX_REBUILD:[
		'Failed rebuilding the index of dumped table %s',
		'重新创建转储表 %0 的索引失败.'
	],
	ER_MASTER:[
		'Error from master: %s',
		'来自主连接 %0 的错误.'
	],
	ER_MASTER_NET_READ:[
		'Net error reading from master',
		'读取主连接时出现网络错误.'
	],
	ER_MASTER_NET_WRITE:[
		'Net error writing to master',
		'写入主连接时出现网络错误.'
	],
	ER_FT_MATCHING_KEY_NOT_FOUND:[
		"Can't find FULLTEXT index matching the column list",
		'无法找到与列列表匹配的FULLTEXT索引.'
	],
	ER_LOCK_OR_ACTIVE_TRANSACTION:[
		"Can't execute the given command because you have active locked tables or an active transaction",
		'由于存在活动的锁定表或活动的事务,不能执行给定的命令.'
	],
	ER_UNKNOWN_SYSTEM_VARIABLE:[
		'Unknown system variable %s',
		'未知的系统变量 %0.'
	],
	ER_CRASHED_ON_USAGE:[
		'Table %s is marked as crashed and should be repaired',
		'表 %0 被标记为崩溃,应予以修复.'
	],
	ER_CRASHED_ON_REPAIR:[
		'Table %s is marked as crashed and last (automatic?) repair failed',
		'表 %0 被标记为崩溃,而且上次(自动)修复失败'
	],
	ER_WARNING_NOT_COMPLETE_ROLLBACK:[
		"Some non-transactional changed tables couldn't be rolled back",
		'不能回滚某些非事务性已变动表.'
	],
	ER_TRANS_CACHE_FULL:[
		"Multi-statement transaction required more than 'max_binlog_cache_size' bytes of storage; increase this mysqld variable and try again",
		"多语句事务要求更多的'max_binlog_cache_size'存储字节,增大mysqld变量,并再次尝试."
	],
	ER_SLAVE_MUST_STOP:[
		'This operation cannot be performed with a running slave; run STOP SLAVE first',
		'运行从实例时不能执行该操作,请首先运行STOP SLAVE.'
	],
	ER_SLAVE_NOT_RUNNING:[
		'This operation requires a running slave; configure slave and do START SLAVE',
		'该操作需要运行的从实例,请配置SLAVE并执行START SLAVE.'
	],
	ER_BAD_SLAVE:[
		'The server is not configured as slave; fix in config file or with CHANGE MASTER TO',
		'服务器未配置为从服务器,请更正config文件,或使用CHANGE MASTER TO.'
	],
	ER_MASTER_INFO:[
		'Could not initialize master info structure; more error messages can be found in the MySQL error log',
		'无法初始化主服务器信息结构,在MySQL错误日志中可找到更多错误消息.'
	],
	ER_SLAVE_THREAD:[
		'Could not create slave thread; check system resources',
		'无法创建从线程,请检查系统资源.'
	],
	ER_TOO_MANY_USER_CONNECTIONS:[
		"User %s already has more than 'max_user_connections' active connections",
		"用户%s已有了超过'max_user_connections'的活动连接."
	],
	ER_SET_CONSTANTS_ONLY:[
		'You may only use constant expressions with SET',
		'或许仅应与SET一起使用常量表达式.'
	],
	ER_LOCK_WAIT_TIMEOUT:[
		'Lock wait timeout exceeded; try restarting transaction',
		'超过了锁定等待超时,请尝试重新启动事务.'
	],
	ER_LOCK_TABLE_FULL:[
		'The total number of locks exceeds the lock table size',
		'总的锁定数超出了锁定表的大小.'
	],
	ER_READ_ONLY_TRANSACTION:[
		'Update locks cannot be acquired during a READ UNCOMMITTED transaction',
		'在READ UNCOMMITTED事务期间,无法获得更新锁定.'
	],
	ER_DROP_DB_WITH_READ_LOCK:[
		'DROP DATABASE not allowed while thread is holding global read lock',
		'当线程保持为全局读锁定时,不允许DROP DATABASE.'
	],
	ER_CREATE_DB_WITH_READ_LOCK:[
		'CREATE DATABASE not allowed while thread is holding global read lock',
		'当线程保持为全局读锁定时,不允许CREATE DATABASE.'
	],
	ER_WRONG_ARGUMENTS:[
		'Incorrect arguments to %s',
		'为 %0 提供的参量不正确.'
	],
	ER_NO_PERMISSION_TO_CREATE_USER:[
		'%s@%s is not allowed to create new users',
		'不允许 %0 @%1创建新用户.'
	],
	ER_UNION_TABLES_IN_DIFFERENT_DIR:[
		'Incorrect table definition; all MERGE tables must be in the same database',
		'不正确的表定义,所有的MERGE表必须位于相同的数据库中.'
	],
	ER_LOCK_DEADLOCK:[
		'Deadlock found when trying to get lock; try restarting transaction',
		'试图获取锁定时发现死锁,请尝试重新启动事务.'
	],
	ER_TABLE_CANT_HANDLE_FT:[
		"The used table type doesn't support FULLTEXT indexes",
		'所使用的表类型不支持FULLTEXT索引.'
	],
	ER_CANNOT_ADD_FOREIGN:[
		'Cannot add foreign key constraint',
		'无法添加外键约束.'
	],
	ER_NO_REFERENCED_ROW:[
		'Cannot add or update a child row: a foreign key constraint fails',
		'无法添加或更新子行,外键约束失败.'
	],
	ER_ROW_IS_REFERENCED:[
		'Cannot delete or update a parent row: a foreign key constraint fails',
		'无法删除或更新父行,外键约束失败.'
	],
	ER_CONNECT_TO_MASTER:[
		'Error connecting to master: %s',
		'连接至主服务器 %0 时出错.'
	],
	ER_QUERY_ON_MASTER:[
		'Error running query on master: %s',
		'在主服务器 %0 上执行查询时出错.'
	],
	ER_ERROR_WHEN_EXECUTING_COMMAND:[
		'Error when executing command %s: %s',
		'执行命令 %0: %1 时出错.'
	],
	ER_WRONG_USAGE:[
		'Incorrect usage of %s and %s',
		'%0 和 %1 的用法不正确.'
	],
	ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT:[
		'The used SELECT statements have a different number of columns',
		'所使用的SELECT语句有不同的列数.'
	],
	ER_CANT_UPDATE_WITH_READLOCK:[
		"Can't execute the query because you have a conflicting read lock",
		'由于存在冲突的读锁定,无法执行查询.'
	],
	ER_MIXING_NOT_ALLOWED:[
		'Mixing of transactional and non-transactional tables is disabled',
		'禁止混合事务性表和非事务性表.'
	],
	ER_DUP_ARGUMENT:[
		'Option %s used twice in statement',
		'在语句中使用了两次选项 %0.'
	],
	ER_USER_LIMIT_REACHED:[
		'User %s has exceeded the %s resource (current value: %ld)',
		'用户%s超出了%s资源（当前值: %ld）.'
	],
	ER_SPECIFIC_ACCESS_DENIED_ERROR:[
		'Access denied; you need (at least one of) the %s privilege(s) for this operation',
		'拒绝访问,需要 %0 权限才能执行该操作.'
	],
	ER_LOCAL_VARIABLE:[
		"Variable %s is a SESSION variable and can't be used with SET GLOBAL",
		'变量 %0 是1种SESSION变量,不能与SET GLOBAL一起使用.'
	],
	ER_GLOBAL_VARIABLE:[
		'Variable %s is a GLOBAL variable and should be set with SET GLOBAL',
		'变量 %0 是1种GLOBAL变量,应使用SET GLOBAL来设置它.'
	],
	ER_NO_DEFAULT:[
		"Variable %s doesn't have a default value",
		'变量 %0 没有默认值.'
	],
	ER_WRONG_VALUE_FOR_VAR:[
		"Variable %s can't be set to the value of %s",
		'变量 %0 不能设置为值 %1.'
	],
	ER_WRONG_TYPE_FOR_VAR:[
		'Incorrect argument type to variable %s',
		'变量 %0 的参量类型不正确.'
	],
	ER_VAR_CANT_BE_READ:[
		'Variable %s can only be set, not read',
		'变量 %0 只能被设置,不能被读取.'
	],
	ER_CANT_USE_OPTION_HERE:[
		'Incorrect usage/placement of %s',
		'不正确的 %0 用法/位置.'
	],
	ER_NOT_SUPPORTED_YET:[
		"This version of MySQL doesn't yet support %s",
		'该MySQL版本尚不支持 %0.'
	],
	ER_MASTER_FATAL_ERROR_READING_BINLOG:[
		'Got fatal error %d from master when reading data from binary log: %s',
		'从二进制日志读取数据时,获得来自主服务器的致命错误 %0: %1.'
	],
	ER_SLAVE_IGNORED_TABLE:[
		'Slave SQL thread ignored the query because of replicate-*-table rules',
		'由于“replicate-*-table”规则,从SQL线程忽略了查询..'
	],
	ER_INCORRECT_GLOBAL_LOCAL_VAR:[
		'Variable %s is a %s variable',
		'变量 %0 是一种 %1 变量.'
	],
	ER_WRONG_FK_DEF:[
		'Incorrect foreign key definition for %s: %s',
		'对于 %0: %1 外键定义不正确.'
	],
	ER_KEY_REF_DO_NOT_MATCH_TABLE_REF:[
		"Key reference and table reference don't match",
		'键引用和表引用不匹配.'
	],
	ER_OPERAND_COLUMNS:[
		'Operand should contain %d column(s)',
		'操作数应包含 %0 列.'
	],
	ER_SUBQUERY_NO_1_ROW:[
		'Subquery returns more than 1 row',
		'子查询返回1行以上.'
	],
	ER_UNKNOWN_STMT_HANDLER:[
		'Unknown prepared statement handler (%.*s) given to %s',
		'指定给 %0 的未知预处理语句句柄.'
	],
	ER_CORRUPT_HELP_DB:[
		'Help database is corrupt or does not exist',
		'帮助数据库崩溃或不存在.'
	],
	ER_CYCLIC_REFERENCE:[
		'Cyclic reference on subqueries',
		'对子查询的循环引用.'
	],
	ER_AUTO_CONVERT:[
		'Converting column %s from %s to %s',
		'将列%s从%s转换为%s.'
	],
	ER_ILLEGAL_REFERENCE:[
		'Reference %s not supported (%s)',
		'引用 %0 不被支持 ( %1 ).'
	],
	ER_DERIVED_MUST_HAVE_ALIAS:[
		'Every derived table must have its own alias',
		'所有的导出表必须有自己的别名.'
	],
	ER_SELECT_REDUCED:[
		'Select %u was reduced during optimization',
		'在优化期间简化了选择 %0.'
	],
	ER_TABLENAME_NOT_ALLOWED_HERE:[
		'Table %s from one of the SELECTs cannot be used in %s',
		'来自某一SELECT的表 %0 不能在 %1 中使用.'
	],
	ER_NOT_SUPPORTED_AUTH_MODE:[
		'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
		'客户端不支持服务器请求的鉴定协议,请考虑升级MySQL客户端.'
	],
	ER_SPATIAL_CANT_HAVE_NULL:[
		'All parts of a SPATIAL index must be NOT NULL',
		'SPATIAL索引的所有部分必须是NOT NULL.'
	],
	ER_COLLATION_CHARSET_MISMATCH:[
		'COLLATION %s is not valid for CHARACTER SET %s',
		'对于CHARACTER SET %1,COLLATION %0无效.'
	],
	ER_SLAVE_WAS_RUNNING:[
		'Slave is already running',
		'从服务器正在运行.'
	],
	ER_SLAVE_WAS_NOT_RUNNING:[
		'Slave already has been stopped',
		'从服务器已停止.'
	],
	ER_TOO_BIG_FOR_UNCOMPRESS:[
		'Uncompressed data size too large; the maximum size is %d (probably, length of uncompressed data was corrupted)',
		'解压的数据过大,最大大小为 %0 （也可能是,解压数据的长度已损坏）.'
	],
	ER_ZLIB_Z_MEM_ERROR:[
		'ZLIB: Not enough memory',
		'ZLIB,无足够内存.'
	],
	ER_ZLIB_Z_BUF_ERROR:[
		'ZLIB: Not enough room in the output buffer (probably, length of uncompressed data was corrupted)',
		'ZLIB,输出缓冲区内无足够空间（也可能是,解压数据的长度已损坏）.'
	],
	ER_ZLIB_Z_DATA_ERROR:[
		'ZLIB: Input data corrupted',
		'ZLIB,输入数据已损坏.'
	],
	ER_CUT_VALUE_GROUP_CONCAT:[
		'Row %u was cut by GROUP_CONCAT()',
		'%0 行被GROUP_CONCAT()截去.'
	],
	ER_WARN_TOO_FEW_RECORDS:[
		"Row %ld doesn't contain data for all columns",
		'行 %0 不包含所有列的数据.'
	],
	ER_WARN_TOO_MANY_RECORDS:[
		'Row %ld was truncated; it contained more data than there were input columns',
		'行 %0 被解短,它包含的数据大于输入列中的数据.'
	],
	ER_WARN_NULL_TO_NOTNULL:[
		'Column set to default value; NULL supplied to NOT NULL column %s at row %ld',
		'列被设为默认值,在行 %0 上将NULL提供给了NOT NULL列.'
	],
	ER_WARN_DATA_OUT_OF_RANGE:[
		'Out of range value for column %s at row %ld',
		'为行 %1 上的列 %0 调整超出范围的值.'
	],
	WARN_DATA_TRUNCATED:[
		'Data truncated for column %s at row %ld',
		'为行 %1 上的列 %0 截短数据.'
	],
	ER_WARN_USING_OTHER_HANDLER:[
		'Using storage engine %s for table %s',
		'为表 %1 使用存储引擎 %1.'
	],
	ER_CANT_AGGREGATE_2COLLATIONS:[
		'Illegal mix of collations (%s,%s) and (%s,%s) for operation %s',
		'对于操作%s,非法混合了校对(%s,%s)和(%s,%s).'
	],
	ER_DROP_USER:[
		'Cannot drop one or more of the requested users',
		'无法撤销1个或多个请求的用户.'
	],
	ER_REVOKE_GRANTS:[
		"Can't revoke all privileges for one or more of the requested users",
		'无法撤销所有权限,为1个或多个请求的用户授权.'
	],
	ER_CANT_AGGREGATE_3COLLATIONS:[
		'Illegal mix of collations (%s,%s), (%s,%s), (%s,%s) for operation %s',
		'对于操作%s,非法混合了校对(%s,%s)、(%s,%s)和(%s,%s).'
	],
	ER_CANT_AGGREGATE_NCOLLATIONS:[
		'Illegal mix of collations for operation %s',
		'对于操作%0,非法混合了校对.'
	],
	ER_VARIABLE_IS_NOT_STRUCT:[
		"Variable %s is not a variable component (can't be used as XXXX.variable_name)",
		'变量 %0 不是变量组分（不能用作XXXX.variable_name）.'
	],
	ER_UNKNOWN_COLLATION:[
		'Unknown collation: %s',
		'未知校对 %0.'
	],
	ER_SLAVE_IGNORED_SSL_PARAMS:[
		'SSL parameters in CHANGE MASTER are ignored because this MySQL slave was compiled without SSL support; they can be used later if MySQL slave with SSL is started',
		'由于该MySQL从服务器是在不支持SSL的情况下编译的,CHANGE MASTER中的SSL参数被忽略,随后,如果启动了具备SSL功能的MySQL,可使用这些参数.'
	],
	ER_SERVER_IS_IN_SECURE_AUTH_MODE:[
		'Server is running in --secure-auth mode, but %s@%s has a password in the old format; please change the password to the new format',
		'服务器正运行在“--secure-auth”模式下,但 %0@%1 有1个采用旧格式的密码,请将密码更改为新格式.'
	],
	ER_WARN_FIELD_RESOLVED:[
		'Field or reference %s of SELECT #%d was resolved in SELECT #%d',
		'SELECT #%d的字段或引用 %s 是在SELECT #%d中确定的.'
	],
	ER_BAD_SLAVE_UNTIL_COND:[
		'Incorrect parameter or combination of parameters for START SLAVE UNTIL',
		'对于START SLAVE UNTIL,不正确的参数或参数组合.'
	],
	ER_MISSING_SKIP_SLAVE:[
		"It is recommended to use --skip-slave-start when doing step-by-step replication with START SLAVE UNTIL; otherwise, you will get problems if you get an unexpected slave's mysqld restart",
		'与START SLAVE UNTIL一起执行按步复制时,建议使用“--skip-slave-start”,否则,如果发生未预料的从服务器mysqld重启,间出现问题.'
	],
	ER_UNTIL_COND_IGNORED:[
		'SQL thread is not to be started so UNTIL options are ignored',
		'SQL线程未启动,因而UNTIL选项被忽略.'
	],
	ER_WRONG_NAME_FOR_INDEX:[
		'Incorrect index name %s',
		'不正确的索引名 %0.'
	],
	ER_WRONG_NAME_FOR_CATALOG:[
		'Incorrect catalog name %s',
		'不正确的目录名 %0.'
	],
	ER_WARN_QC_RESIZE:[
		'Query cache failed to set size %lu; new query cache size is %lu',
		'查询高速缓冲设置大小 %0 时失败,新的查询高速缓冲的大小是 %1.'
	],
	ER_BAD_FT_COLUMN:[
		'Column %s cannot be part of FULLTEXT index',
		'列 %0 不能是FULLTEXT索引的一部分.'
	],
	ER_UNKNOWN_KEY_CACHE:[
		'Unknown key cache %s',
		'未知的键高速缓冲 %0.'
	],
	ER_WARN_HOSTNAME_WONT_WORK:[
		'MySQL is started in --skip-name-resolve mode; you must restart it without this switch for this grant to work',
		'MySQL是在“--skip-name-resolve”模式下启动的,必须在不使用该开关的情况下重启它,以便该授权能起作用.'
	],
	ER_UNKNOWN_STORAGE_ENGINE:[
		'Unknown storage engine %s',
		'未知的表引擎 %0.'
	],
	ER_WARN_DEPRECATED_SYNTAX:[
		'%s is deprecated and will be removed in a future release. Please use %s instead',
		'%0 已过时,请使用 %1 取而代之.'
	],
	ER_NON_UPDATABLE_TABLE:[
		'The target table %s of the %s is not updatable',
		'%1 的目标表 %0 不可更新.'
	],
	ER_FEATURE_DISABLED:[
		'The %s feature is disabled; you need MySQL built with %s to have it working',
		'%0 特性已被禁止,要想使其工作,需要用 %1 创建MySQL.'
	],
	ER_OPTION_PREVENTS_STATEMENT:[
		'The MySQL server is running with the %s option so it cannot execute this statement',
		'MySQL正使用 %0 选项运行,因此不能执行该语句.'
	],
	ER_DUPLICATED_VALUE_IN_TYPE:[
		'Column %s has duplicated value %s in %s',
		'列%s在%s中有重复值%s.'
	],
	ER_TRUNCATED_WRONG_VALUE:[
		'Truncated incorrect %s value: %s',
		'截短了不正确的%s值: %s'
	],
	ER_TOO_MUCH_AUTO_TIMESTAMP_COLS:[
		'Incorrect table definition; there can be only one TIMESTAMP column with CURRENT_TIMESTAMP in DEFAULT or ON UPDATE clause',
		'不正确的表定义,在DEFAULT或ON UPDATE子句中,对于CURRENT_TIMESTAMP,只能有一个TIMESTAMP列.'
	],
	ER_INVALID_ON_UPDATE:[
		'Invalid ON UPDATE clause for %s column',
		'对于 %0 列,ON UPDATE子句无效.'
	],
	ER_UNSUPPORTED_PS:[
		'This command is not supported in the prepared statement protocol yet',
		'在预处理语句协议中,尚不支持该命令.'
	],
	ER_GET_ERRMSG:[
		'Got error %d %s from %s',
		'从%s获得错误%d %s.'
	],
	ER_GET_TEMPORARY_ERRMSG:[
		'Got temporary error %d %s from %s',
		'从%s获得临时错误%d %s.'
	],
	ER_UNKNOWN_TIME_ZONE:[
		'Unknown or incorrect time zone: %s',
		'未知或不正确的时区: %0'
	],
	ER_WARN_INVALID_TIMESTAMP:[
		'Invalid TIMESTAMP value in column %s at row %ld',
		'在行 %1 的列 %0 中存在无效的TIMESTAMP值.'
	],
	ER_INVALID_CHARACTER_STRING:[
		'Invalid %s character string: %s',
		'无效的%s字符串: %s'
	],
	ER_WARN_ALLOWED_PACKET_OVERFLOWED:[
		'Result of %s() was larger than max_allowed_packet (%ld) - truncated',
		'%0()的结果大于max_allowed_packet ( %1 ),已截短'
	],
	ER_CONFLICTING_DECLARATIONS:[
		'Conflicting declarations: %s and %s',
		'冲突声明: %0 和 %1'
	],
	ER_SP_NO_RECURSIVE_CREATE:[
		"Can't create a %s from within another stored routine",
		'不能从另一个存储子程序中创建 %0.'
	],
	ER_SP_ALREADY_EXISTS:[
		'%s already exists',
		'%0 已存在.'
	],
	ER_SP_DOES_NOT_EXIST:[
		'%s does not exist',
		'%0 不存在.'
	],
	ER_SP_DROP_FAILED:[
		'Failed to DROP %s',
		'DROP %0 失败'
	],
	ER_SP_STORE_FAILED:[
		'Failed to CREATE %s',
		'CREATE %0 失败.'
	],
	ER_SP_LILABEL_MISMATCH:[
		'%s with no matching label: %s',
		'%s无匹配标签: %s'
	],
	ER_SP_LABEL_REDEFINE:[
		'Redefining label %s',
		'重新定义标签%0'
	],
	ER_SP_LABEL_MISMATCH:[
		'End-label %s without match',
		'末端标签 %0 无匹配项'
	],
	ER_SP_UNINIT_VAR:[
		'Referring to uninitialized variable %s',
		'正在引用未初始化的变量 %0.'
	],
	ER_SP_BADSELECT:[
		"PROCEDURE %s can't return a result set in the given context",
		'PROCEDURE %0不能在给定场景下返回结果集.'
	],
	ER_SP_BADRETURN:[
		'RETURN is only allowed in a FUNCTION',
		'仅在FUNCTION中允许RETURN.'
	],
	ER_SP_BADSTATEMENT:[
		'%s is not allowed in stored procedures',
		'在存储程序中不允许 %0.'
	],
	ER_UPDATE_LOG_DEPRECATED_IGNORED:[
		'The update log is deprecated and replaced by the binary log; SET SQL_LOG_UPDATE has been ignored. This option will be removed in MySQL 5.6.',
		'更新日志已被放弃,并用二进制日志取代,SET SQL_LOG_UPDATE被忽略.'
	],
	ER_UPDATE_LOG_DEPRECATED_TRANSLATED:[
		'The update log is deprecated and replaced by the binary log; SET SQL_LOG_UPDATE has been translated to SET SQL_LOG_BIN. This option will be removed in MySQL 5.6.',
		'更新日志已被放弃,并用二进制日志取代,SET SQL_LOG_UPDATE已被截短为SET SQL_LOG_BIN.'
	],
	ER_QUERY_INTERRUPTED:[
		'Query execution was interrupted',
		'查询执行被中断.'
	],
	ER_SP_WRONG_NO_OF_ARGS:[
		'Incorrect number of arguments for %s; expected %u, got %u',
		'对于 %s,参量数目不正确,预期为%u,但却是%u.'
	],
	ER_SP_COND_MISMATCH:[
		'Undefined CONDITION: %s',
		'未定义的CONDITION: %0'
	],
	ER_SP_NORETURN:[
		'No RETURN found in FUNCTION %s',
		'在FUNCTION %0中未发现RETURN.'
	],
	ER_SP_NORETURNEND:[
		'FUNCTION %s ended without RETURN',
		'FUNCTION %0结束时缺少RETURN.'
	],
	ER_SP_BAD_CURSOR_QUERY:[
		'Cursor statement must be a SELECT',
		'光标语句必须是SELECT.'
	],
	ER_SP_BAD_CURSOR_SELECT:[
		'Cursor SELECT must not have INTO',
		'光标SELECT不得有INTO.'
	],
	ER_SP_CURSOR_MISMATCH:[
		'Undefined CURSOR: %s',
		'未定义的CURSOR: %0'
	],
	ER_SP_CURSOR_ALREADY_OPEN:[
		'Cursor is already open',
		'光标已打开'
	],
	ER_SP_CURSOR_NOT_OPEN:[
		'Cursor is not open',
		'光标未打开'
	],
	ER_SP_UNDECLARED_VAR:[
		'Undeclared variable: %s',
		'未声明的变量: %0'
	],
	ER_SP_WRONG_NO_OF_FETCH_ARGS:[
		'Incorrect number of FETCH variables',
		'不正确的FETCH变量数目.'
	],
	ER_SP_FETCH_NO_DATA:[
		'No data - zero rows fetched, selected, or processed',
		'FETCH无数据.'
	],
	ER_SP_DUP_PARAM:[
		'Duplicate parameter: %s',
		'重复参数: %0'
	],
	ER_SP_DUP_VAR:[
		'Duplicate variable: %s',
		'重复变量: %0'
	],
	ER_SP_DUP_COND:[
		'Duplicate condition: %s',
		'重复条件: %0'
	],
	ER_SP_DUP_CURS:[
		'Duplicate cursor: %s',
		'重复光标: %0'
	],
	ER_SP_CANT_ALTER:[
		'Failed to ALTER %s',
		'ALTER %0 失败.'
	],
	ER_SP_SUBSELECT_NYI:[
		'Subquery value not supported',
		'不支持Subselect值.'
	],
	ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG:[
		'%s is not allowed in stored function or trigger',
		'在存储函数或触发程序中,不允许 %0.'
	],
	ER_SP_VARCOND_AFTER_CURSHNDLR:[
		'Variable or condition declaration after cursor or handler declaration',
		'光标或句柄声明后面的变量或条件声明.'
	],
	ER_SP_CURSOR_AFTER_HANDLER:[
		'Cursor declaration after handler declaration',
		'句柄声明后面的光标声明.'
	],
	ER_SP_CASE_NOT_FOUND:[
		'Case not found for CASE statement',
		'对于CASE语句,未发现Case.'
	],
	ER_FPARSER_TOO_BIG_FILE:[
		'Configuration file %s is too big',
		'配置文件 %0 过大.'
	],
	ER_FPARSER_BAD_HEADER:[
		'Malformed file type header in file %s',
		'文件 %0 中存在残缺的文件类型标题.'
	],
	ER_FPARSER_EOF_IN_COMMENT:[
		'Unexpected end of file while parsing comment %s',
		'解析 %0 时,文件意外结束.'
	],
	ER_FPARSER_ERROR_IN_PARAMETER:[
		'Error while parsing parameter %s (line: %s)',
		'解析参数 %0 时出错（行: %1）.'
	],
	ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER:[
		'Unexpected end of file while skipping unknown parameter %s',
		'跳过未知参数 %0 时,文件意外结束.'
	],
	ER_VIEW_NO_EXPLAIN:[
		'EXPLAIN/SHOW can not be issued; lacking privileges for underlying table',
		'EXPLAIN/SHOW无法发出,缺少对基本表的权限.'
	],
	ER_FRM_UNKNOWN_TYPE:[
		'File %s has unknown type %s in its header',
		'文件 %0 在其题头中有未知的类型 %1.'
	],
	ER_WRONG_OBJECT:[
		'%s is not %s',
		'%0 不是 %1.'
	],
	ER_NONUPDATEABLE_COLUMN:[
		'Column %s is not updatable',
		'列 %0 不可更新.'
	],
	ER_VIEW_SELECT_DERIVED:[
		"View's SELECT contains a subquery in the FROM clause",
		'视图的SELECT在FROM子句中包含子查询.'
	],
	ER_VIEW_SELECT_CLAUSE:[
		"View's SELECT contains a %s clause",
		'视图的SELECT包含 %0 子句.'
	],
	ER_VIEW_SELECT_VARIABLE:[
		"View's SELECT contains a variable or parameter",
		'视图的SELECT包含1个变量或参数.'
	],
	ER_VIEW_SELECT_TMPTABLE:[
		"View's SELECT refers to a temporary table %s",
		'视图的SELECT引用了临时表 %0.'
	],
	ER_VIEW_WRONG_LIST:[
		"View's SELECT and view's field list have different column counts",
		'视图的SELECT和视图的字段列表有不同的列计数.'
	],
	ER_WARN_VIEW_MERGE:[
		"View merge algorithm can't be used here for now (assumed undefined algorithm)",
		'此时,不能在这里使用视图合并算法（假定未定义算法）.'
	],
	ER_WARN_VIEW_WITHOUT_KEY:[
		'View being updated does not have complete key of underlying table in it',
		'正在更新的视图没有其基本表的完整键.'
	],
	ER_VIEW_INVALID:[
		'View %s references invalid table(s) or column(s) or function(s) or definer/invoker of view lack rights to use them',
		'视图 %0 引用了无效的表、列、或函数,或视图的定义程序/调用程序缺少使用它们的权限.'
	],
	ER_SP_NO_DROP_SP:[
		"Can't drop or alter a %s from within another stored routine",
		'无法从另一个存储子程序中撤销或更改 %0.'
	],
	ER_SP_GOTO_IN_HNDLR:[
		'GOTO is not allowed in a stored procedure handler',
		'在存储子程序句柄中不允许GOTO.'
	],
	ER_TRG_ALREADY_EXISTS:[
		'Trigger already exists',
		'触发程序已存在.'
	],
	ER_TRG_DOES_NOT_EXIST:[
		'Trigger does not exist',
		'触发程序不存在.'
	],
	ER_TRG_ON_VIEW_OR_TEMP_TABLE:[
		"Trigger's %s is view or temporary table",
		'触发程序的 %0 是视图或临时表.'
	],
	ER_TRG_CANT_CHANGE_ROW:[
		'Updating of %s row is not allowed in %strigger',
		'在 %1 触发程序中,不允许更新 %0 行.'
	],
	ER_TRG_NO_SUCH_ROW_IN_TRG:[
		'There is no %s row in %s trigger',
		'在 %1 触发程序中没有 %0 行.'
	],
	ER_NO_DEFAULT_FOR_FIELD:[
		"Field %s doesn't have a default value",
		'字段 %0 没有默认值.'
	],
	ER_DIVISION_BY_ZERO:[
		'Division by 0',
		'被0除.'
	],
	ER_TRUNCATED_WRONG_VALUE_FOR_FIELD:[
		'Incorrect %s value: %s for column %s at row %ld',
		'不正确的%s值,%s,对于行%ld 上的列%s.'
	],
	ER_ILLEGAL_VALUE_FOR_TYPE:[
		'Illegal %s value found during parsing',
		'解析过程中发现非法 %0 值.'
	],
	ER_VIEW_NONUPD_CHECK:[
		'CHECK OPTION on non-updatable view %s',
		'不可更新视图 %0 上的CHECK OPTION.'
	],
	ER_VIEW_CHECK_FAILED:[
		'CHECK OPTION failed %s',
		'CHECK OPTION 失败 %0'
	],
	ER_PROCACCESS_DENIED_ERROR:[
		'%s command denied to user %s@%s for routine %s',
		'对于子程序%s,拒绝用户 %0@%1 使用 %2 命令.'
	],
	ER_RELAY_LOG_FAIL:[
		'Failed purging old relay logs: %s',
		'清除旧中继日志失败,%0'
	],
	ER_PASSWD_LENGTH:[
		'Password hash should be a %d-digit hexadecimal number',
		'密码混编应是 %0 位的十六进制数.'
	],
	ER_UNKNOWN_TARGET_BINLOG:[
		'Target log not found in binlog index',
		'在binlog索引中未发现目标日志.'
	],
	ER_IO_ERR_LOG_INDEX_READ:[
		'I/O error reading log index file',
		'读取日志索引文件时出现I/O错误.'
	],
	ER_BINLOG_PURGE_PROHIBITED:[
		'Server configuration does not permit binlog purge',
		'服务器配置不允许binlog清除.'
	],
	ER_FSEEK_FAIL:[
		'Failed on fseek()',
		'fseek()失败.'
	],
	ER_BINLOG_PURGE_FATAL_ERR:[
		'Fatal error during log purge',
		'在日志清除过程中出现致命错误.'
	],
	ER_LOG_IN_USE:[
		'A purgeable log is in use, will not purge',
		'可清除的日志正在使用,不能清除.'
	],
	ER_LOG_PURGE_UNKNOWN_ERR:[
		'Unknown error during log purge',
		'在日志清除过程中出现未知错误.'
	],
	ER_RELAY_LOG_INIT:[
		'Failed initializing relay log position: %s',
		'初始化中继日志位置失败,%0'
	],
	ER_NO_BINARY_LOGGING:[
		'You are not using binary logging',
		'未使用二进制日志功能.'
	],
	ER_RESERVED_SYNTAX:[
		'The %s syntax is reserved for purposes internal to the MySQL server',
		'%0 语法保留给MySQL服务器内部使用.'
	],
	ER_WSAS_FAILED:[
		'WSAStartup Failed',
		'WSAStartup失败.'
	],
	ER_DIFF_GROUPS_PROC:[
		"Can't handle procedures with different groups yet",
		'尚不能用不同的组处理过程.'
	],
	ER_NO_GROUP_FOR_PROC:[
		'Select must have a group with this procedure',
		'对于该过程,SELECT必须有1个组.'
	],
	ER_ORDER_WITH_PROC:[
		"Can't use ORDER clause with this procedure",
		'不能与该过程一起使用ORDER子句.'
	],
	ER_LOGGING_PROHIBIT_CHANGING_OF:[
		'Binary logging and replication forbid changing the global server %s',
		'二进制日志功能和复制功能禁止更改全局服务器 %0.'
	],
	ER_NO_FILE_MAPPING:[
		"Can't map file: %s, errno: %d",
		'无法映射文件: %0, errno: %1'
	],
	ER_WRONG_MAGIC:[
		'Wrong magic in %s',
		'%0 中有错'
	],
	ER_PS_MANY_PARAM:[
		'Prepared statement contains too many placeholders',
		'预处理语句包含过多的占位符.'
	],
	ER_KEY_PART_0:[
		'Key part %s length cannot be 0',
		'键部分 %0 的长度不能为0.'
	],
	ER_VIEW_CHECKSUM:[
		'View text checksum failed',
		'视图文本校验和失败.'
	],
	ER_VIEW_MULTIUPDATE:[
		'Can not modify more than one base table through a join view %s',
		'无法通过联合视图 %0 更改1个以上的基本表.'
	],
	ER_VIEW_NO_INSERT_FIELD_LIST:[
		'Can not insert into join view %s without fields list',
		'不能在没有字段列表的情况下插入联合视图 %0.'
	],
	ER_VIEW_DELETE_MERGE_VIEW:[
		'Can not delete from join view %s',
		'不能从联合视图 %0 中删除.'
	],
	ER_CANNOT_USER:[
		'Operation %s failed for %s',
		'对于 %1 的操作 %0 失败.'
	],
	ER_XAER_NOTA:[
		'XAER_NOTA: Unknown XID',
		'XAER_NOTA: 未知XID'
	],
	ER_XAER_INVAL:[
		'XAER_INVAL: Invalid arguments (or unsupported command)',
		'XAER_INVAL: 无效参量（或不支持的命令）'
	],
	ER_XAER_RMFAIL:[
		'XAER_RMFAIL: The command cannot be executed when global transaction is in the %s state',
		'XAER_RMFAIL: 当全局事务处于 %0 状态时,不能执行命令.'
	],
	ER_XAER_OUTSIDE:[
		'XAER_OUTSIDE: Some work is done outside global transaction',
		'XAER_OUTSIDE: 某些工作是在全局事务外完成的.'
	],
	ER_XAER_RMERR:[
		'XAER_RMERR: Fatal error occurred in the transaction branch - check your data for consistency',
		'XAER_RMERR: 在事务分支中出现致命错误,请检查数据一致性.'
	],
	ER_XA_RBROLLBACK:[
		'XA_RBROLLBACK: Transaction branch was rolled back',
		'XA_RBROLLBACK: 回滚了事务分支.'
	],
	ER_NONEXISTING_PROC_GRANT:[
		'There is no such grant defined for user %s on host %s on routine %s',
		'在子程序%s上没有为主机%s上的用户%s定义的这类授权.'
	],
	ER_PROC_AUTO_GRANT_FAIL:[
		'Failed to grant EXECUTE and ALTER ROUTINE privileges',
		'无法授予EXECUTE和ALTER ROUTINE权限.'
	],
	ER_PROC_AUTO_REVOKE_FAIL:[
		'Failed to revoke all privileges to dropped routine',
		'无法撤销已放弃子程序上的所有权限.'
	],
	ER_DATA_TOO_LONG:[
		'Data too long for column %s at row %ld',
		'对于行 %1 上的列 %0 来说,数据过长.'
	],
	ER_SP_BAD_SQLSTATE:[
		'Bad SQLSTATE: %s',
		'不良SQLSTATE: %0'
	],
	ER_STARTUP:[
		'%s: ready for connections. Version: %s socket: %s port: %d %s',
		'%s,连接就绪；版本,%s；套接字,%s；端口,%d %s'
	],
	ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR:[
		"Can't load value from file with fixed size rows to variable",
		'不能从具有固定大小行的文件中将值加载到变量.'
	],
	ER_CANT_CREATE_USER_WITH_GRANT:[
		'You are not allowed to create a user with GRANT',
		'不允许用GRANT创建用户.'
	],
	ER_WRONG_VALUE_FOR_TYPE:[
		'Incorrect %s value: %s for function %s',
		'不正确的%s值,%s,对于函数%s'
	],
	ER_TABLE_DEF_CHANGED:[
		'Table definition has changed, please retry transaction',
		'表定义已更改,请再次尝试事务.'
	],
	ER_SP_DUP_HANDLER:[
		'Duplicate handler declared in the same block',
		'在相同块中声明了重复句柄.'
	],
	ER_SP_NOT_VAR_ARG:[
		'OUT or INOUT argument %d for routine %s is not a variable or NEW pseudo-variable in BEFORE trigger',
		'子程序 %0 的OUT或INOUT参量不是变量.'
	],
	ER_SP_NO_RETSET:[
		'Not allowed to return a result set from a %s',
		'不允许从 %0 返回结果集.'
	],
	ER_CANT_CREATE_GEOMETRY_OBJECT:[
		'Cannot get geometry object from data you send to the GEOMETRY field',
		'不能从发送给GEOMETRY字段的数据中获取几何对象.'
	],
	ER_FAILED_ROUTINE_BREAK_BINLOG:[
		'A routine failed and has neither NO SQL nor READS SQL DATA in its declaration and binary logging is enabled; if non-transactional tables were updated, the binary log will miss their changes',
		'1个子程序失败,在其声明没有NO SQL或READS SQL DATA,而且二进制日志功能已启用,如果更新了非事务性表,二进制日志将丢失其变化信息.'
	],
	ER_BINLOG_UNSAFE_ROUTINE:[
		'This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)',
		'在该子程序的在其声明没有DETERMINISTIC、NO SQL或READS SQL DATA,而且二进制日志功能已启用（你或许打算使用不太安全的log_bin_trust_routine_creators变量）.'
	],
	ER_BINLOG_CREATE_ROUTINE_NEED_SUPER:[
		'You do not have the SUPER privilege and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)',
		'你没有SUPER权限,而且二进制日志功能已启用（你或许打算使用不太安全的log_bin_trust_routine_creators变量）.'
	],
	ER_EXEC_STMT_WITH_OPEN_CURSOR:[
		"You can't execute a prepared statement which has an open cursor associated with it. Reset the statement to re-execute it.",
		'不能执行该预处理语句,该预处理语句有与之相关的打开光标.请复位语句并再次执行.'
	],
	ER_STMT_HAS_NO_OPEN_CURSOR:[
		'The statement (%lu) has no open cursor.',
		'语句( %0 )没有打开的光标.'
	],
	ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG:[
		'Explicit or implicit commit is not allowed in stored function or trigger.',
		'在存储函数或触发程序中,不允许显式或隐式提交.'
	],
	ER_NO_DEFAULT_FOR_VIEW_FIELD:[
		"Field of view %s underlying table doesn't have a default value",
		'视图 %0 基本表的字段没有默认值.'
	],
	ER_SP_NO_RECURSION:[
		'Recursive stored functions and triggers are not allowed.',
		'不允许递归存储子程序.'
	],
	ER_TOO_BIG_SCALE:[
		'Too big scale %d specified for column %s. Maximum is %lu.',
		'为列%s指定了过大的标度%d.最大为%d.'
	],
	ER_TOO_BIG_PRECISION:[
		'Too big precision %d specified for column %s. Maximum is %lu.',
		'为列%s指定了过高的精度%d.最大为%d.'
	],
	ER_M_BIGGER_THAN_D:[
		'For float(M,D), double(M,D) or decimal(M,D), M must be >= D (column %s).',
		'对于float(M,D)、double(M,D)或decimal(M,D),M必须>= D (列 %0).'
	],
	ER_WRONG_LOCK_OF_SYSTEM_TABLE:[
		"You can't combine write-locking of system tables with other tables or lock types",
		'不能将系统 %0 表的写锁定与其他表结合起来.'
	],
	ER_CONNECT_TO_FOREIGN_DATA_SOURCE:[
		'Unable to connect to foreign data source: %s',
		'无法连接到外部数据源,数据库: %0！'
	],
	ER_QUERY_ON_FOREIGN_DATA_SOURCE:[
		'There was a problem processing the query on the foreign data source. Data source error: %s',
		'处理作用在外部数据源上的查询时出现问题.数据源错误: %0'
	],
	ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST:[
		'The foreign data source you are trying to reference does not exist. Data source error: %s',
		'你试图引用的外部数据源不存在.数据源错误: %0'
	],
	ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE:[
		"Can't create federated table. The data source connection string %s is not in the correct format",
		'无法创建联合表.数据源连接字符串 %0 格式不正确.'
	],
	ER_FOREIGN_DATA_STRING_INVALID:[
		'The data source connection string %s is not in the correct format',
		'数据源连接字符串 %0 格式不正确.'
	],
	ER_CANT_CREATE_FEDERATED_TABLE:[
		"Can't create federated table. Foreign data src error: %s",
		'无法创建联合表.外部数据源错误: %0'
	],
	ER_TRG_IN_WRONG_SCHEMA:[
		'Trigger in wrong schema',
		'触发程序位于错误的方案中.'
	],
	ER_STACK_OVERRUN_NEED_MORE:[
		"Thread stack overrun: %ld bytes used of a %ld byte stack, and %ld bytes needed. Use 'mysqld --thread_stack=#' to specify a bigger stack.",
		"线程堆栈溢出: %ld字节堆栈用了%ld字节,并需要%ld字节.请使用'mysqld -O thread_stack=#'指定更大的堆栈."
	],
	ER_TOO_LONG_BODY:[
		'Routine body for %s is too long',
		'%0 的子程序主体过长.'
	],
	ER_WARN_CANT_DROP_DEFAULT_KEYCACHE:[
		'Cannot drop default keycache',
		'无法撤销默认的keycache.'
	],
	ER_TOO_BIG_DISPLAYWIDTH:[
		'Display width out of range for column %s (max = %lu)',
		'对于列 %0,显示宽度超出范围(max = %1)'
	],
	ER_XAER_DUPID:[
		'XAER_DUPID: The XID already exists',
		'XAER_DUPID: XID已存在'
	],
	ER_DATETIME_FUNCTION_OVERFLOW:[
		'Datetime function: %s field overflow',
		'日期时间函数, %0 字段溢出.'
	],
	ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG:[
		"Can't update table %s in stored function/trigger because it is already used by statement which invoked this stored function/trigger.",
		'由于它已被调用了该存储函数/触发程序的语句使用,不能在存储函数/触发程序中更新表 %0.'
	],
	ER_VIEW_PREVENT_UPDATE:[
		'The definition of table %s prevents operation %s on table %s.',
		'表 %0 的定义不允许在表 %2 上执行操作 %1.'
	],
	ER_PS_NO_RECURSION:[
		"The prepared statement contains a stored routine call that refers to that same statement. It's not allowed to execute a prepared statement in such a recursive manner",
		'预处理语句包含引用了相同语句的存储子程序调用.不允许以这类递归方式执行预处理语句.'
	],
	ER_SP_CANT_SET_AUTOCOMMIT:[
		'Not allowed to set autocommit from a stored function or trigger',
		'不允许从存储函数或触发程序设置autocommit.'
	],
	ER_MALFORMED_DEFINER:[
		'Definer is not fully qualified',
		'Definer is not fully qualified'
	],
	ER_VIEW_FRM_NO_USER:[
		'View %s has no definer information (old table format). Current user is used as definer. Please recreate the view!',
		'视图 %0 没有 definer 信息（旧的表格式）.当前用户将被当作 definer .请重新创建视图！'
	],
	ER_VIEW_OTHER_USER:[
		'You need the SUPER privilege for creation view with %s@%s definer',
		'需要SUPER权限才能创建具有 %0@%1 定义器的视图.'
	],
	ER_NO_SUCH_USER:[
		'The user specified as a definer (%s@%s) does not exist',
		'没有注册的 %0@%1.'
	],
	ER_FORBID_SCHEMA_CHANGE:[
		'Changing schema from %s to %s is not allowed.',
		'不允许将 schema 从 %0 变为 %1.'
	],
	ER_ROW_IS_REFERENCED_2:[
		'Cannot delete or update a parent row: a foreign key constraint fails (%s)',
		'不能删除或更新父行,外键约束失败( %0 ).'
	],
	ER_NO_REFERENCED_ROW_2:[
		'Cannot add or update a child row: a foreign key constraint fails (%s)',
		'不能添加或更新子行,外键约束失败( %0 ).'
	],
	ER_SP_BAD_VAR_SHADOW:[
		'Variable %s must be quoted with `...`, or renamed',
		'必须用`...`引用变量,或重新命名变量.'
	],
	ER_TRG_NO_DEFINER:[
		'No definer attribute for trigger %s The trigger will be activated under the authorization of the invoker, which may have insufficient privileges. Please recreate the trigger.',
		'No definer attribute for trigger %0 The trigger will be activated under the authorization of the invoker, which may have insufficient privileges. Please recreate the trigger.'
	],
	ER_OLD_FILE_FORMAT:[
		'%s has an old format, you should re-create the %s object(s)',
		'%0 has an old format, you should re-create the %1 object(s)'
	],
	ER_SP_RECURSION_LIMIT:[
		'Recursive limit %d (as set by the max_sp_recursion_depth variable) was exceeded for routine %s',
		'Recursive limit %0 (as set by the max_sp_recursion_depth variable) was exceeded for routine %1'
	],
	ER_SP_PROC_TABLE_CORRUPT:[
		'Failed to load routine %s. The table mysql.proc is missing, corrupt, or contains bad data (internal code %d)',
		'Failed to load routine %0. The table mysql.proc is missing, corrupt, or contains bad data (internal code %1)'
	],
	ER_SP_WRONG_NAME:[
		'Incorrect routine name %s',
		'Incorrect routine name %0'
	],
	ER_TABLE_NEEDS_UPGRADE:[
		'Table upgrade required. Please do "REPAIR TABLE `%s`" or dump/reload to fix it!',
		'Table upgrade required. Please do "REPAIR TABLE `%0`" or dump/reload to fix it!'
	],
	ER_SP_NO_AGGREGATE:[
		'AGGREGATE is not supported for stored functions',
		'AGGREGATE is not supported for stored functions'
	],
	ER_MAX_PREPARED_STMT_COUNT_REACHED:[
		"Can't create more than max_prepared_stmt_count statements (current value: %lu)",
		"Can't create more than max_prepared_stmt_count statements (current value: %0)"
	],
	ER_VIEW_RECURSIVE:[
		'`%s`.`%s` contains view recursion',
		'`%0`.`%1` contains view recursion'
	],
	ER_NON_GROUPING_FIELD_USED:[
		'Non-grouping field %s is used in %s clause',
		'Non-grouping field %0 is used in %1 clause'
	],
	ER_TABLE_CANT_HANDLE_SPKEYS:[
		"The used table type doesn't support SPATIAL indexes",
		"The used table type doesn't support SPATIAL indexes"
	],
	ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA:[
		'Triggers can not be created on system tables',
		'Triggers can not be created on system tables'
	],
	ER_REMOVED_SPACES:[
		'Leading spaces are removed from name %s',
		'Leading spaces are removed from name %0'
	],
	ER_AUTOINC_READ_FAILED:[
		'Failed to read auto-increment value from storage engine',
		'Failed to read auto-increment value from storage engine'
	],
	ER_USERNAME:[
		'user name',
		'user name'
	],
	ER_HOSTNAME:[
		'host name',
		'host name'
	],
	ER_WRONG_STRING_LENGTH:[
		'String %s is too long for %s (should be no longer than %d)',
		'String %0 is too long for %1 (should be no longer than %1)'
	],
	ER_NON_INSERTABLE_TABLE:[
		'The target table %s of the %s is not insertable-into',
		'The target table %0 of the %s is not insertable-into'
	],
	ER_ADMIN_WRONG_MRG_TABLE:[
		"Table %s is differently defined or of non-MyISAM type or doesn't exist",
		"Table %0 is differently defined or of non-MyISAM type or doesn't exist"
	],
	ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT:[
		'Too high level of nesting for select',
		'Too high level of nesting for select'
	],
	ER_NAME_BECOMES_EMPTY:[
		"Name %s has become ''",
		"Name %0 has become ''"
	],
	ER_AMBIGUOUS_FIELD_TERM:[
		'First character of the FIELDS TERMINATED string is ambiguous; please use non-optional and non-empty FIELDS ENCLOSED BY',
		'First character of the FIELDS TERMINATED string is ambiguous; please use non-optional and non-empty FIELDS ENCLOSED BY'
	],
	ER_FOREIGN_SERVER_EXISTS:[
		'The foreign server, %s, you are trying to create already exists.',
		'The foreign server, %0, you are trying to create already exists.'
	],
	ER_FOREIGN_SERVER_DOESNT_EXIST:[
		'The foreign server name you are trying to reference does not exist. Data source error: %s',
		'The foreign server name you are trying to reference does not exist. Data source error: %0'
	],
	ER_ILLEGAL_HA_CREATE_OPTION:[
		'Table storage engine %s does not support the create option %s',
		'Table storage engine %0 does not support the create option %1'
	],
	ER_PARTITION_REQUIRES_VALUES_ERROR:[
		'Syntax error: %s PARTITIONING requires definition of VALUES %s for each partition',
		'语法错误: %s PARTITIONING 要求完整的 VALUES %s.'
	],
	ER_PARTITION_WRONG_VALUES_ERROR:[
		'Only %s PARTITIONING can use VALUES %s in partition definition',
		'只有 %0 PARTITIONING 能使用 VALUES %1.'
	],
	ER_PARTITION_MAXVALUE_ERROR:[
		'MAXVALUE can only be used in last partition definition',
		'MAXVALUE 只能定义在最后.'
	],
	ER_PARTITION_SUBPARTITION_ERROR:[
		'Subpartitions can only be hash partitions and by key',
		'子分区只能是哈希分区,并按键分区.'
	],
	ER_PARTITION_SUBPART_MIX_ERROR:[
		'Must define subpartitions on all partitions if on one partition',
		'Must define subpartitions on all partitions if on one partition'
	],
	ER_PARTITION_WRONG_NO_PART_ERROR:[
		'Wrong number of partitions defined, mismatch with previous setting',
		'定义了错误的分区数,与前面的设置不匹配.'
	],
	ER_PARTITION_WRONG_NO_SUBPART_ERROR:[
		'Wrong number of subpartitions defined, mismatch with previous setting',
		'定义了错误的子分区数,与前面的设置不匹配.'
	],
	ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR:[
		'Constant, random or timezone-dependent expressions in (sub)partitioning function are not allowed',
		'Constant, random or timezone-dependent expressions in (sub)partitioning function are not allowed'
	],
	ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR:[
		'Expression in RANGE/LIST VALUES must be constant',
		'RANGE/LIST VALUES中的表达式必须是常量.'
	],
	ER_FIELD_NOT_FOUND_PART_ERROR:[
		'Field in list of fields for partition function not found in table',
		'在表中未发现分区函数字段列表中的字段.'
	],
	ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR:[
		'List of fields is only allowed in KEY partitions',
		'仅在KEY分区中允许使用字段列表.'
	],
	ER_INCONSISTENT_PARTITION_INFO_ERROR:[
		'The partition info in the frm file is not consistent with what can be written into the frm file',
		'frm文件中的分区信息与能够写入到frm文件中的不一致.'
	],
	ER_PARTITION_FUNC_NOT_ALLOWED_ERROR:[
		'The %s function returns the wrong type',
		'%0 函数返回了错误类型.'
	],
	ER_PARTITIONS_MUST_BE_DEFINED_ERROR:[
		'For %s partitions each partition must be defined',
		'对于 %0 ,必须定义完整.'
	],
	ER_RANGE_NOT_INCREASING_ERROR:[
		'VALUES LESS THAN value must be strictly increasing for each partition',
		'对于各分区,VALUES LESS THAN值必须严格增大.'
	],
	ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR:[
		'VALUES value must be of same type as partition function',
		'VALUES 值必须与分区函数具有相同的类型.'
	],
	ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR:[
		'Multiple definition of same constant in list partitioning',
		'Multiple definition of same constant in list partitioning'
	],
	ER_PARTITION_ENTRY_ERROR:[
		'Partitioning can not be used stand-alone in query',
		'在查询中,不能独立使用分区功能.'
	],
	ER_MIX_HANDLER_ERROR:[
		'The mix of handlers in the partitions is not allowed in this version of MySQL',
		'在该MySQL版本中,不允许分区中的句柄组合.'
	],
	ER_PARTITION_NOT_DEFINED_ERROR:[
		'For the partitioned engine it is necessary to define all %s',
		'对于分区引擎,有必要定义所有的 %0.'
	],
	ER_TOO_MANY_PARTITIONS_ERROR:[
		'Too many partitions (including subpartitions) were defined',
		'定义了过多分区.'
	],
	ER_SUBPARTITION_ERROR:[
		'It is only possible to mix RANGE/LIST partitioning with HASH/KEY partitioning for subpartitioning',
		'对于子分区,仅能将RANGE/LIST分区与HASH/KEY分区混合起来.'
	],
	ER_CANT_CREATE_HANDLER_FILE:[
		'Failed to create specific handler file',
		'无法创建特定的句柄文件.'
	],
	ER_BLOB_FIELD_IN_PART_FUNC_ERROR:[
		'A BLOB field is not allowed in partition function',
		'在分区函数中,不允许使用BLOB字段.'
	],
	ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF:[
		"A %s must include all columns in the table's partitioning function",
		'在分区函数中, %0 需要包含所有文件.'
	],
	ER_NO_PARTS_ERROR:[
		'Number of %s = 0 is not an allowed value',
		'%0 的数目= 0不是允许的值.'
	],
	ER_PARTITION_MGMT_ON_NONPARTITIONED:[
		'Partition management on a not partitioned table is not possible',
		'无法在非分区表上进行分区管理.'
	],
	ER_FOREIGN_KEY_ON_PARTITIONED:[
		'Foreign key clause is not yet supported in conjunction with partitioning',
		'Foreign key clause is not yet supported in conjunction with partitioning'
	],
	ER_DROP_PARTITION_NON_EXISTENT:[
		'Error in list of partitions to %s',
		'分区列表中的错误出现变化.'
	],
	ER_DROP_LAST_PARTITION:[
		'Cannot remove all partitions, use DROP TABLE instead',
		'不能删除所有分区,请使用DROP TABLE取而代之.'
	],
	ER_COALESCE_ONLY_ON_HASH_PARTITION:[
		'COALESCE PARTITION can only be used on HASH/KEY partitions',
		'COALESCE PARTITION仅能在HASH/KEY分区上使用.'
	],
	ER_REORG_HASH_ONLY_ON_SAME_NO:[
		'REORGANIZE PARTITION can only be used to reorganize partitions not to change their numbers',
		'REORGANIZE PARTITION can only be used to reorganize partitions not to change their numbers'
	],
	ER_REORG_NO_PARAM_ERROR:[
		'REORGANIZE PARTITION without parameters can only be used on auto-partitioned tables using HASH PARTITIONs',
		'REORGANIZE PARTITION without parameters can only be used on auto-partitioned tables using HASH PARTITIONs'
	],
	ER_ONLY_ON_RANGE_LIST_PARTITION:[
		'%s PARTITION can only be used on RANGE/LIST partitions',
		'%0 PARTITION仅能在RANGE/LIST分区上使用.'
	],
	ER_ADD_PARTITION_SUBPART_ERROR:[
		'Trying to Add partition(s) with wrong number of subpartitions',
		'试图用错误的子分区数增加分区.'
	],
	ER_ADD_PARTITION_NO_NEW_PARTITION:[
		'At least one partition must be added',
		'必须至少添加1个分区.'
	],
	ER_COALESCE_PARTITION_NO_PARTITION:[
		'At least one partition must be coalesced',
		'必须至少合并1个分区.'
	],
	ER_REORG_PARTITION_NOT_EXIST:[
		'More partitions to reorganize than there are partitions',
		'重组的分区数超过了已有的分区数.'
	],
	ER_SAME_NAME_PARTITION:[
		'Duplicate partition name %s',
		'在表中,所有分区必须有唯一的名称.'
	],
	ER_NO_BINLOG_ERROR:[
		'It is not allowed to shut off binlog on this command',
		'It is not allowed to shut off binlog on this command'
	],
	ER_CONSECUTIVE_REORG_PARTITIONS:[
		'When reorganizing a set of partitions they must be in consecutive order',
		'重组分区集合时,它们必须连续.'
	],
	ER_REORG_OUTSIDE_RANGE:[
		'Reorganize of range partitions cannot change total ranges except for last partition where it can extend the range',
		'新分区的范围超过了已重组分区的范围.'
	],
	ER_PARTITION_FUNCTION_FAILURE:[
		'Partition function not supported in this version for this handler',
		'Partition function not supported in this version for this handler'
	],
	ER_PART_STATE_ERROR:[
		'Partition state cannot be defined from CREATE/ALTER TABLE',
		'Partition state cannot be defined from CREATE/ALTER TABLE'
	],
	ER_LIMITED_PART_RANGE:[
		'The %s handler only supports 32 bit integers in VALUES',
		'The %0 handler only supports 32 bit integers in VALUES'
	],
	ER_PLUGIN_IS_NOT_LOADED:[
		'Plugin %s is not loaded',
		'未加载插件%0'
	],
	ER_WRONG_VALUE:[
		'Incorrect %s value: %s',
		'Incorrect %s value: %0'
	],
	ER_NO_PARTITION_FOR_GIVEN_VALUE:[
		'Table has no partition for value %s',
		'Table has no partition for value %0'
	],
	ER_FILEGROUP_OPTION_ONLY_ONCE:[
		'It is not allowed to specify %s more than once',
		'It is not allowed to specify %0 more than once'
	],
	ER_CREATE_FILEGROUP_FAILED:[
		'Failed to create %s',
		'Failed to create %0'
	],
	ER_DROP_FILEGROUP_FAILED:[
		'Failed to drop %s',
		'Failed to drop %0'
	],
	ER_TABLESPACE_AUTO_EXTEND_ERROR:[
		"The handler doesn't support autoextend of tablespaces",
		"The handler doesn't support autoextend of tablespaces"
	],
	ER_WRONG_SIZE_NUMBER:[
		'A size parameter was incorrectly specified, either number or on the form 10M',
		'A size parameter was incorrectly specified, either number or on the form 10M'
	],
	ER_SIZE_OVERFLOW_ERROR:[
		"The size number was correct but we don't allow the digit part to be more than 2 billion",
		"The size number was correct but we don't allow the digit part to be more than 2 billion"
	],
	ER_ALTER_FILEGROUP_FAILED:[
		'Failed to alter: %s',
		'Failed to alter: %0'
	],
	ER_BINLOG_ROW_LOGGING_FAILED:[
		'Writing one row to the row-based binary log failed',
		'Writing one row to the row-based binary log failed'
	],
	ER_BINLOG_ROW_WRONG_TABLE_DEF:[
		'Table definition on master and slave does not match: %s',
		'Table definition on master and slave does not match: %0'
	],
	ER_BINLOG_ROW_RBR_TO_SBR:[
		'Slave running with --log-slave-updates must use row-based binary logging to be able to replicate row-based binary log events',
		'Slave running with --log-slave-updates must use row-based binary logging to be able to replicate row-based binary log events'
	],
	ER_EVENT_ALREADY_EXISTS:[
		'Event %s already exists',
		'Event %0 already exists'
	],
	ER_EVENT_STORE_FAILED:[
		'Failed to store event %s. Error code %d from storage engine.',
		'Failed to store event %0. Error code %1 from storage engine.'
	],
	ER_EVENT_DOES_NOT_EXIST:[
		'Unknown event %s',
		'Unknown event %0'
	],
	ER_EVENT_CANT_ALTER:[
		'Failed to alter event %s',
		'Failed to alter event %0'
	],
	ER_EVENT_DROP_FAILED:[
		'Failed to drop %s',
		'Failed to drop %0'
	],
	ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG:[
		'INTERVAL is either not positive or too big',
		'INTERVAL is either not positive or too big'
	],
	ER_EVENT_ENDS_BEFORE_STARTS:[
		'ENDS is either invalid or before STARTS',
		'ENDS is either invalid or before STARTS'
	],
	ER_EVENT_EXEC_TIME_IN_THE_PAST:[
		'Event execution time is in the past. Event has been disabled',
		'Event execution time is in the past. Event has been disabled'
	],
	ER_EVENT_OPEN_TABLE_FAILED:[
		'Failed to open mysql.event',
		'Failed to open mysql.event'
	],
	ER_EVENT_NEITHER_M_EXPR_NOR_M_AT:[
		'No datetime expression provided',
		'No datetime expression provided'
	],
	ER_COL_COUNT_DOESNT_MATCH_CORRUPTED:[
		'Column count of mysql.%s is wrong. Expected %d, found %d. The table is probably corrupted',
		'Column count of mysql.%s is wrong. Expected %d, found %d. The table is probably corrupted'
	],
	ER_CANNOT_LOAD_FROM_TABLE:[
		'Cannot load from mysql.%s. The table is probably corrupted',
		'Cannot load from mysql.%0. The table is probably corrupted'
	],
	ER_EVENT_CANNOT_DELETE:[
		'Failed to delete the event from mysql.event',
		'Failed to delete the event from mysql.event'
	],
	ER_EVENT_COMPILE_ERROR:[
		"Error during compilation of event's body",
		"Error during compilation of event's body"
	],
	ER_EVENT_SAME_NAME:[
		'Same old and new event name',
		'Same old and new event name'
	],
	ER_EVENT_DATA_TOO_LONG:[
		'Data for column %s too long',
		'Data for column %0 too long'
	],
	ER_DROP_INDEX_FK:[
		'Cannot drop index %s: needed in a foreign key constraint',
		'Cannot drop index %0: needed in a foreign key constraint'
	],
	ER_WARN_DEPRECATED_SYNTAX_WITH_VER:[
		'The syntax %s is deprecated and will be removed in MySQL %s. Please use %s instead',
		'The syntax %s is deprecated and will be removed in MySQL %s. Please use %s instead'
	],
	ER_CANT_WRITE_LOCK_LOG_TABLE:[
		"You can't write-lock a log table. Only read access is possible",
		"You can't write-lock a log table. Only read access is possible"
	],
	ER_CANT_LOCK_LOG_TABLE:[
		"You can't use locks with log tables.",
		"You can't use locks with log tables."
	],
	ER_FOREIGN_DUPLICATE_KEY:[
		'Upholding foreign key constraints for table %s, entry %s, key %s would lead to a duplicate entry',
		'Upholding foreign key constraints for table %0, entry %s, key %s would lead to a duplicate entry'
	],
	ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE:[
		'Column count of mysql.%s is wrong. Expected %d, found %d. Created with MySQL %d, now running %d. Please use mysql_upgrade to fix this error.',
		'Column count of mysql.%0 is wrong. Expected %1, found %2. Created with MySQL %3, now running %4. Please use mysql_upgrade to fix this error.'
	],
	ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR:[
		'Cannot switch out of the row-based binary log format when the session has open temporary tables',
		'Cannot switch out of the row-based binary log format when the session has open temporary tables'
	],
	ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT:[
		'Cannot change the binary logging format inside a stored function or trigger',
		'Cannot change the binary logging format inside a stored function or trigger'
	],
	ER_NDB_CANT_SWITCH_BINLOG_FORMAT:[
		'The NDB cluster engine does not support changing the binlog format on the fly yet',
		'The NDB cluster engine does not support changing the binlog format on the fly yet'
	],
	ER_PARTITION_NO_TEMPORARY:[
		'Cannot create temporary table with partitions',
		'Cannot create temporary table with partitions'
	],
	ER_PARTITION_CONST_DOMAIN_ERROR:[
		'Partition constant is out of partition function domain',
		'Partition constant is out of partition function domain'
	],
	ER_PARTITION_FUNCTION_IS_NOT_ALLOWED:[
		'This partition function is not allowed',
		'This partition function is not allowed'
	],
	ER_DDL_LOG_ERROR:[
		'Error in DDL log',
		'Error in DDL log'
	],
	ER_NULL_IN_VALUES_LESS_THAN:[
		'Not allowed to use NULL value in VALUES LESS THAN',
		'Not allowed to use NULL value in VALUES LESS THAN'
	],
	ER_WRONG_PARTITION_NAME:[
		'Incorrect partition name',
		'Incorrect partition name'
	],
	ER_CANT_CHANGE_TX_ISOLATION:[
		"Transaction isolation level can't be changed while a transaction is in progress",
		"Transaction isolation level can't be changed while a transaction is in progress"
	],
	ER_DUP_ENTRY_AUTOINCREMENT_CASE:[
		'ALTER TABLE causes auto_increment resequencing, resulting in duplicate entry %s for key %s',
		'ALTER TABLE causes auto_increment resequencing, resulting in duplicate entry %s for key %0'
	],
	ER_EVENT_MODIFY_QUEUE_ERROR:[
		'Internal scheduler error %d',
		'Internal scheduler error %d'
	],
	ER_EVENT_SET_VAR_ERROR:[
		'Error during starting/stopping of the scheduler. Error code %u',
		'Error during starting/stopping of the scheduler. Error code %u'
	],
	ER_PARTITION_MERGE_ERROR:[
		'Engine cannot be used in partitioned tables',
		'Engine cannot be used in partitioned tables'
	],
	ER_CANT_ACTIVATE_LOG:[
		'Cannot activate %s log',
		'Cannot activate %0 log'
	],
	ER_RBR_NOT_AVAILABLE:[
		'The server was not built with row-based replication',
		'The server was not built with row-based replication'
	],
	ER_BASE64_DECODE_ERROR:[
		'Decoding of base64 string failed',
		'Decoding of base64 string failed'
	],
	ER_EVENT_RECURSION_FORBIDDEN:[
		'Recursion of EVENT DDL statements is forbidden when body is present',
		'Recursion of EVENT DDL statements is forbidden when body is present'
	],
	ER_EVENTS_DB_ERROR:[
		'Cannot proceed because system tables used by Event Scheduler were found damaged at server start',
		'Cannot proceed because system tables used by Event Scheduler were found damaged at server start'
	],
	ER_ONLY_INTEGERS_ALLOWED:[
		'Only integers allowed as number here',
		'Only integers allowed as number here'
	],
	ER_UNSUPORTED_LOG_ENGINE:[
		'This storage engine cannot be used for log tables',
		'This storage engine cannot be used for log tables'
	],
	ER_BAD_LOG_STATEMENT:[
		'You cannot %s a log table if logging is enabled',
		'You cannot %0 a log table if logging is enabled'
	],
	ER_CANT_RENAME_LOG_TABLE:[
		'Cannot rename %s. When logging enabled, rename to/from log table must rename two tables: the log table to an archive table and another table back to %s',
		'Cannot rename %0. When logging enabled, rename to/from log table must rename two tables: the log table to an archive table and another table back to %1'
	],
	ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT:[
		'Incorrect parameter count in the call to native function %s',
		'Incorrect parameter count in the call to native function %0'
	],
	ER_WRONG_PARAMETERS_TO_NATIVE_FCT:[
		'Incorrect parameters in the call to native function %s',
		'Incorrect parameters in the call to native function %0'
	],
	ER_WRONG_PARAMETERS_TO_STORED_FCT:[
		'Incorrect parameters in the call to stored function %s',
		'Incorrect parameters in the call to stored function %0'
	],
	ER_NATIVE_FCT_NAME_COLLISION:[
		'This function %s has the same name as a native function',
		'This function %0 has the same name as a native function'
	],
	ER_DUP_ENTRY_WITH_KEY_NAME:[
		'Duplicate entry %s for key %s',
		'Duplicate entry %0 for key %1'
	],
	ER_BINLOG_PURGE_EMFILE:[
		'Too many files opened, please execute the command again',
		'Too many files opened, please execute the command again'
	],
	ER_EVENT_CANNOT_CREATE_IN_THE_PAST:[
		'Event execution time is in the past and ON COMPLETION NOT PRESERVE is set. The event was dropped immediately after creation.',
		'Event execution time is in the past and ON COMPLETION NOT PRESERVE is set. The event was dropped immediately after creation.'
	],
	ER_EVENT_CANNOT_ALTER_IN_THE_PAST:[
		'Event execution time is in the past and ON COMPLETION NOT PRESERVE is set. The event was dropped immediately after creation.',
		'Event execution time is in the past and ON COMPLETION NOT PRESERVE is set. The event was dropped immediately after creation.'
	],
	ER_SLAVE_INCIDENT:[
		'The incident %s occured on the master. Message: %s',
		'The incident %s occured on the master. Message: %s'
	],
	ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT:[
		'Table has no partition for some existing values',
		'Table has no partition for some existing values'
	],
	ER_BINLOG_UNSAFE_STATEMENT:[
		'Unsafe statement written to the binary log using statement format since BINLOG_FORMAT = STATEMENT. %s',
		'Unsafe statement written to the binary log using statement format since BINLOG_FORMAT = STATEMENT. %0'
	],
	ER_SLAVE_FATAL_ERROR:[
		'Fatal error: %s',
		'Fatal error: %0'
	],
	ER_SLAVE_RELAY_LOG_READ_FAILURE:[
		'Relay log read failure: %s',
		'Relay log read failure: %0'
	],
	ER_SLAVE_RELAY_LOG_WRITE_FAILURE:[
		'Relay log write failure: %s',
		'Relay log write failure: %0'
	],
	ER_SLAVE_CREATE_EVENT_FAILURE:[
		'Failed to create %s',
		'Failed to create %0'
	],
	ER_SLAVE_MASTER_COM_FAILURE:[
		'Master command %s failed: %s',
		'Master command %s failed: %s'
	],
	ER_BINLOG_LOGGING_IMPOSSIBLE:[
		'Binary logging not possible. Message: %s',
		'Binary logging not possible. Message: %0'
	],
	ER_VIEW_NO_CREATION_CTX:[
		'View `%s`.`%s` has no creation context',
		'View `%s`.`%s` has no creation context'
	],
	ER_VIEW_INVALID_CREATION_CTX:[
		"Creation context of view `%s`.`%s' is invalid",
		"Creation context of view `%s`.`%s' is invalid"
	],
	ER_SR_INVALID_CREATION_CTX:[
		'Creation context of stored routine `%s`.`%s` is invalid',
		'Creation context of stored routine `%s`.`%s` is invalid'
	],
	ER_TRG_CORRUPTED_FILE:[
		'Corrupted TRG file for table `%s`.`%s`',
		'Corrupted TRG file for table `%s`.`%s`'
	],
	ER_TRG_NO_CREATION_CTX:[
		'Triggers for table `%s`.`%s` have no creation context',
		'Triggers for table `%s`.`%s` have no creation context'
	],
	ER_TRG_INVALID_CREATION_CTX:[
		'Trigger creation context of table `%s`.`%s` is invalid',
		'Trigger creation context of table `%s`.`%s` is invalid'
	],
	ER_EVENT_INVALID_CREATION_CTX:[
		'Creation context of event `%s`.`%s` is invalid',
		'Creation context of event `%s`.`%s` is invalid'
	],
	ER_TRG_CANT_OPEN_TABLE:[
		'Cannot open table for trigger `%s`.`%s`',
		'Cannot open table for trigger `%s`.`%s`'
	],
	ER_CANT_CREATE_SROUTINE:[
		'Cannot create stored routine `%s`. Check warnings',
		'Cannot create stored routine `%0`. Check warnings'
	],
	ER_NEVER_USED:[
		'Ambiguous slave modes combination. %s',
		'Ambiguous slave modes combination. %0'
	],
	ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT:[
		'The BINLOG statement of type `%s` was not preceded by a format description BINLOG statement.',
		'The BINLOG statement of type `%0` was not preceded by a format description BINLOG statement.'
	],
	ER_SLAVE_CORRUPT_EVENT:[
		'Corrupted replication event was detected',
		'Corrupted replication event was detected'
	],
	ER_LOAD_DATA_INVALID_COLUMN:[
		'Invalid column reference (%s) in LOAD DATA',
		'Invalid column reference ( %0 ) in LOAD DATA'
	],
	ER_LOG_PURGE_NO_FILE:[
		'Being purged log %s was not found',
		'Being purged log %0 was not found'
	],
	ER_XA_RBTIMEOUT:[
		'XA_RBTIMEOUT: Transaction branch was rolled back: took too long',
		'XA_RBTIMEOUT: Transaction branch was rolled back: took too long'
	],
	ER_XA_RBDEADLOCK:[
		'XA_RBDEADLOCK: Transaction branch was rolled back: deadlock was detected',
		'XA_RBDEADLOCK: Transaction branch was rolled back: deadlock was detected'
	],
	ER_NEED_REPREPARE:[
		'Prepared statement needs to be re-prepared',
		'Prepared statement needs to be re-prepared'
	],
	ER_DELAYED_NOT_SUPPORTED:[
		'DELAYED option not supported for table %s',
		'DELAYED option not supported for table %0'
	],
	WARN_NO_MASTER_INFO:[
		'The master info structure does not exist',
		'The master info structure does not exist'
	],
	WARN_OPTION_IGNORED:[
		'<%s> option ignored',
		'<%0> option ignored'
	],
	WARN_PLUGIN_DELETE_BUILTIN:[
		'Built-in plugins cannot be deleted',
		'Built-in plugins cannot be deleted'
	],
	WARN_PLUGIN_BUSY:[
		'Plugin is busy and will be uninstalled on shutdown',
		'Plugin is busy and will be uninstalled on shutdown'
	],
	ER_VARIABLE_IS_READONLY:[
		'%s variable %s is read-only. Use SET %s to assign the value',
		'%0 variable %1 is read-only. Use SET %2 to assign the value'
	],
	ER_WARN_ENGINE_TRANSACTION_ROLLBACK:[
		'Storage engine %s does not support rollback for this statement. Transaction rolled back and must be restarted',
		'Storage engine %0 does not support rollback for this statement. Transaction rolled back and must be restarted'
	],
	ER_SLAVE_HEARTBEAT_FAILURE:[
		"Unexpected master's heartbeat data: %s",
		"Unexpected master's heartbeat data: %s"
	],
	ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE:[
		'The requested value for the heartbeat period is either negative or exceeds the maximum allowed (%s seconds).',
		'The requested value for the heartbeat period is either negative or exceeds the maximum allowed (%0 seconds).'
	],
	ER_NDB_REPLICATION_SCHEMA_ERROR:[
		'Bad schema for mysql.ndb_replication table. Message: %s',
		'Bad schema for mysql.ndb_replication table. Message: %0'
	],
	ER_CONFLICT_FN_PARSE_ERROR:[
		'Error in parsing conflict function. Message: %s',
		'Error in parsing conflict function. Message: %0'
	],
	ER_EXCEPTIONS_WRITE_ERROR:[
		'Write to exceptions table failed. Message: %s',
		'Write to exceptions table failed. Message: %0'
	],
	ER_TOO_LONG_TABLE_COMMENT:[
		'Comment for table %s is too long (max = %lu)',
		'Comment for table %0 is too long (max = %1)'
	],
	ER_TOO_LONG_FIELD_COMMENT:[
		'Comment for field %s is too long (max = %lu)',
		'Comment for field %0 is too long (max = %1)'
	],
	ER_FUNC_INEXISTENT_NAME_COLLISION:[
		"FUNCTION %s does not exist. Check the 'Function Name Parsing and Resolution' section in the Reference Manual",
		"FUNCTION %s does not exist. Check the 'Function Name Parsing and Resolution' section in the Reference Manual"
	],
	ER_DATABASE_NAME:[
		'Database',
		'Database'
	],
	ER_TABLE_NAME:[
		'Table',
		'Table'
	],
	ER_PARTITION_NAME:[
		'Partition',
		'Partition'
	],
	ER_SUBPARTITION_NAME:[
		'Subpartition',
		'Subpartition'
	],
	ER_TEMPORARY_NAME:[
		'Temporary',
		'Temporary'
	],
	ER_RENAMED_NAME:[
		'Renamed',
		'Renamed'
	],
	ER_TOO_MANY_CONCURRENT_TRXS:[
		'Too many active concurrent transactions',
		'Too many active concurrent transactions'
	],
	WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED:[
		'Non-ASCII separator arguments are not fully supported',
		'Non-ASCII separator arguments are not fully supported'
	],
	ER_DEBUG_SYNC_TIMEOUT:[
		'debug sync point wait timed out',
		'debug sync point wait timed out'
	],
	ER_DEBUG_SYNC_HIT_LIMIT:[
		'debug sync point hit limit reached',
		'debug sync point hit limit reached'
	],
	ER_DUP_SIGNAL_SET:[
		'Duplicate condition information item %s',
		'Duplicate condition information item %0'
	],
	ER_SIGNAL_WARN:[
		'Unhandled user-defined warning condition',
		'Unhandled user-defined warning condition'
	],
	ER_SIGNAL_NOT_FOUND:[
		'Unhandled user-defined not found condition',
		'Unhandled user-defined not found condition'
	],
	ER_SIGNAL_EXCEPTION:[
		'Unhandled user-defined exception condition',
		'Unhandled user-defined exception condition'
	],
	ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER:[
		'RESIGNAL when handler not active',
		'RESIGNAL when handler not active'
	],
	ER_SIGNAL_BAD_CONDITION_TYPE:[
		'SIGNAL/RESIGNAL can only use a CONDITION defined with SQLSTATE',
		'SIGNAL/RESIGNAL can only use a CONDITION defined with SQLSTATE'
	],
	WARN_COND_ITEM_TRUNCATED:[
		'Data truncated for condition item %s',
		'Data truncated for condition item %0'
	],
	ER_COND_ITEM_TOO_LONG:[
		'Data too long for condition item %s',
		'Data too long for condition item %0'
	],
	ER_UNKNOWN_LOCALE:[
		'Unknown locale: %s',
		'Unknown locale: %0'
	],
	ER_SLAVE_IGNORE_SERVER_IDS:[
		'The requested server id %d clashes with the slave startup option --replicate-same-server-id',
		'The requested server id %0 clashes with the slave startup option --replicate-same-server-id'
	],
	ER_QUERY_CACHE_DISABLED:[
		'Query cache is disabled; restart the server with query_cache_type=1 to enable it',
		'Query cache is disabled; restart the server with query_cache_type=1 to enable it'
	],
	ER_SAME_NAME_PARTITION_FIELD:[
		'Duplicate partition field name %s',
		'Duplicate partition field name %0'
	],
	ER_PARTITION_COLUMN_LIST_ERROR:[
		'Inconsistency in usage of column lists for partitioning',
		'Inconsistency in usage of column lists for partitioning'
	],
	ER_WRONG_TYPE_COLUMN_VALUE_ERROR:[
		'Partition column values of incorrect type',
		'Partition column values of incorrect type'
	],
	ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR:[
		'Too many fields in %s',
		'Too many fields in %0'
	],
	ER_MAXVALUE_IN_VALUES_IN:[
		'Cannot use MAXVALUE as value in VALUES IN',
		'Cannot use MAXVALUE as value in VALUES IN'
	],
	ER_TOO_MANY_VALUES_ERROR:[
		'Cannot have more than one value for this type of %s partitioning',
		'Cannot have more than one value for this type of %0 partitioning'
	],
	ER_ROW_SINGLE_PARTITION_FIELD_ERROR:[
		'Row expressions in VALUES IN only allowed for multi-field column partitioning',
		'Row expressions in VALUES IN only allowed for multi-field column partitioning'
	],
	ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD:[
		'Field %s is of a not allowed type for this type of partitioning',
		'Field %0 is of a not allowed type for this type of partitioning'
	],
	ER_PARTITION_FIELDS_TOO_LONG:[
		'The total length of the partitioning fields is too large',
		'The total length of the partitioning fields is too large'
	],
	ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE:[
		'Cannot execute statement: impossible to write to binary log since both row-incapable engines and statement-incapable engines are involved.',
		'Cannot execute statement: impossible to write to binary log since both row-incapable engines and statement-incapable engines are involved.'
	],
	ER_BINLOG_ROW_MODE_AND_STMT_ENGINE:[
		'Cannot execute statement: impossible to write to binary log since BINLOG_FORMAT = ROW and at least one table uses a storage engine limited to statement-based logging.',
		'Cannot execute statement: impossible to write to binary log since BINLOG_FORMAT = ROW and at least one table uses a storage engine limited to statement-based logging.'
	],
	ER_BINLOG_UNSAFE_AND_STMT_ENGINE:[
		'Cannot execute statement: impossible to write to binary log since statement is unsafe, storage engine is limited to statement-based logging, and BINLOG_FORMAT = MIXED. %s',
		'Cannot execute statement: impossible to write to binary log since statement is unsafe, storage engine is limited to statement-based logging, and BINLOG_FORMAT = MIXED. %0'
	],
	ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE:[
		'Cannot execute statement: impossible to write to binary log since statement is in row format and at least one table uses a storage engine limited to statement-based logging.',
		'Cannot execute statement: impossible to write to binary log since statement is in row format and at least one table uses a storage engine limited to statement-based logging.'
	],
	ER_BINLOG_STMT_MODE_AND_ROW_ENGINE:[
		'Cannot execute statement: impossible to write to binary log since BINLOG_FORMAT = STATEMENT and at least one table uses a storage engine limited to row-based logging.%s',
		'Cannot execute statement: impossible to write to binary log since BINLOG_FORMAT = STATEMENT and at least one table uses a storage engine limited to row-based logging.%0'
	],
	ER_BINLOG_ROW_INJECTION_AND_STMT_MODE:[
		'Cannot execute statement: impossible to write to binary log since statement is in row format and BINLOG_FORMAT = STATEMENT.',
		'Cannot execute statement: impossible to write to binary log since statement is in row format and BINLOG_FORMAT = STATEMENT.'
	],
	ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE:[
		'Cannot execute statement: impossible to write to binary log since more than one engine is involved and at least one engine is self-logging.',
		'Cannot execute statement: impossible to write to binary log since more than one engine is involved and at least one engine is self-logging.'
	],
	ER_BINLOG_UNSAFE_LIMIT:[
		'The statement is unsafe because it uses a LIMIT clause. This is unsafe because the set of rows included cannot be predicted.',
		'The statement is unsafe because it uses a LIMIT clause. This is unsafe because the set of rows included cannot be predicted.'
	],
	ER_BINLOG_UNSAFE_INSERT_DELAYED:[
		'The statement is unsafe because it uses INSERT DELAYED. This is unsafe because the times when rows are inserted cannot be predicted.',
		'The statement is unsafe because it uses INSERT DELAYED. This is unsafe because the times when rows are inserted cannot be predicted.'
	],
	ER_BINLOG_UNSAFE_SYSTEM_TABLE:[
		'The statement is unsafe because it uses the general log, slow query log, or performance_schema table(s). This is unsafe because system tables may differ on slaves.',
		'The statement is unsafe because it uses the general log, slow query log, or performance_schema table(s). This is unsafe because system tables may differ on slaves.'
	],
	ER_BINLOG_UNSAFE_AUTOINC_COLUMNS:[
		'Statement is unsafe because it invokes a trigger or a stored function that inserts into an AUTO_INCREMENT column. Inserted values cannot be logged correctly.',
		'Statement is unsafe because it invokes a trigger or a stored function that inserts into an AUTO_INCREMENT column. Inserted values cannot be logged correctly.'
	],
	ER_BINLOG_UNSAFE_UDF:[
		'Statement is unsafe because it uses a UDF which may not return the same value on the slave.',
		'Statement is unsafe because it uses a UDF which may not return the same value on the slave.'
	],
	ER_BINLOG_UNSAFE_SYSTEM_VARIABLE:[
		'Statement is unsafe because it uses a system variable that may have a different value on the slave.',
		'Statement is unsafe because it uses a system variable that may have a different value on the slave.'
	],
	ER_BINLOG_UNSAFE_SYSTEM_FUNCTION:[
		'Statement is unsafe because it uses a system function that may return a different value on the slave.',
		'Statement is unsafe because it uses a system function that may return a different value on the slave.'
	],
	ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS:[
		'Statement is unsafe because it accesses a non-transactional table after accessing a transactional table within the same transaction.',
		'Statement is unsafe because it accesses a non-transactional table after accessing a transactional table within the same transaction.'
	],
	ER_MESSAGE_AND_STATEMENT:[
		'%s Statement: %s',
		'%0 Statement: %1'
	],
	ER_SLAVE_CONVERSION_FAILED:[
		'Column %d of table %s cannot be converted from type %s to type %s',
		'Column %0 of table %1 cannot be converted from type %s to type %2'
	],
	ER_SLAVE_CANT_CREATE_CONVERSION:[
		"Can't create conversion table for table %s",
		"Can't create conversion table for table %0"
	],
	ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT:[
		'Cannot modify @@session.binlog_format inside a transaction',
		'Cannot modify @@session.binlog_format inside a transaction'
	],
	ER_PATH_LENGTH:[
		'The path specified for %s is too long.',
		'The path specified for %0 is too long.'
	],
	ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT:[
		'The syntax %s is deprecated and will be removed in MySQL %s.',
		'The syntax %0 is deprecated and will be removed in MySQL %1.'
	],
	ER_WRONG_NATIVE_TABLE_STRUCTURE:[
		'Native table %s.%s has the wrong structure',
		'Native table %0.%1 has the wrong structure'
	],
	ER_WRONG_PERFSCHEMA_USAGE:[
		'Invalid performance_schema usage.',
		'Invalid performance_schema usage.'
	],
	ER_WARN_I_S_SKIPPED_TABLE:[
		'Table %s.%s was skipped since its definition is being modified by concurrent DDL statement',
		'Table %0.%1 was skipped since its definition is being modified by concurrent DDL statement'
	],
	ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT:[
		'Cannot modify @@session.binlog_direct_non_transactional_updates inside a transaction',
		'Cannot modify @@session.binlog_direct_non_transactional_updates inside a transaction'
	],
	ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT:[
		'Cannot change the binlog direct flag inside a stored function or trigger',
		'Cannot change the binlog direct flag inside a stored function or trigger'
	],
	ER_SPATIAL_MUST_HAVE_GEOM_COL:[
		'A SPATIAL index may only contain a geometrical type column',
		'A SPATIAL index may only contain a geometrical type column'
	],
	ER_TOO_LONG_INDEX_COMMENT:[
		'Comment for index %s is too long (max = %lu)',
		'Comment for index %0 is too long (max = %1)'
	],
	ER_LOCK_ABORTED:[
		'Wait on a lock was aborted due to a pending exclusive lock',
		'Wait on a lock was aborted due to a pending exclusive lock'
	],
	ER_DATA_OUT_OF_RANGE:[
		'%s value is out of range in %s',
		'%s value is out of range in %0'
	],
	ER_WRONG_SPVAR_TYPE_IN_LIMIT:[
		'A variable of a non-integer based type in LIMIT clause',
		'A variable of a non-integer based type in LIMIT clause'
	],
	ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE:[
		'Mixing self-logging and non-self-logging engines in a statement is unsafe.',
		'Mixing self-logging and non-self-logging engines in a statement is unsafe.'
	],
	ER_BINLOG_UNSAFE_MIXED_STATEMENT:[
		'Statement accesses nontransactional table as well as transactional or temporary table, and writes to any of them.',
		'Statement accesses nontransactional table as well as transactional or temporary table, and writes to any of them.'
	],
	ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN:[
		'Cannot modify @@session.sql_log_bin inside a transaction',
		'Cannot modify @@session.sql_log_bin inside a transaction'
	],
	ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN:[
		'Cannot change the sql_log_bin inside a stored function or trigger',
		'Cannot change the sql_log_bin inside a stored function or trigger'
	],
	ER_FAILED_READ_FROM_PAR_FILE:[
		'Failed to read from the .par file',
		'Failed to read from the .par file'
	],
	ER_VALUES_IS_NOT_INT_TYPE_ERROR:[
		'VALUES value for partition %s must have type INT',
		'VALUES value for partition %0 must have type INT'
	],
	ER_ACCESS_DENIED_NO_PASSWORD_ERROR:[
		'Access denied for user %s@%s',
		'Access denied for user %0@%1'
	],
	ER_SET_PASSWORD_AUTH_PLUGIN:[
		'SET PASSWORD has no significance for users authenticating via plugins',
		'SET PASSWORD has no significance for users authenticating via plugins'
	],
	ER_GRANT_PLUGIN_USER_EXISTS:[
		'GRANT with IDENTIFIED WITH is illegal because the user %-.*s already exists',
		'GRANT with IDENTIFIED WITH is illegal because the user %-.*s already exists'
	],
	ER_TRUNCATE_ILLEGAL_FK:[
		'Cannot truncate a table referenced in a foreign key constraint (%s)',
		'Cannot truncate a table referenced in a foreign key constraint ( %0 )'
	],
	ER_PLUGIN_IS_PERMANENT:[
		'Plugin %s is force_plus_permanent and can not be unloaded',
		'Plugin %0 is force_plus_permanent and can not be unloaded'
	],
	ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN:[
		'The requested value for the heartbeat period is less than 1 millisecond. The value is reset to 0, meaning that heartbeating will effectively be disabled.',
		'The requested value for the heartbeat period is less than 1 millisecond. The value is reset to 0, meaning that heartbeating will effectively be disabled.'
	],
	ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX:[
		"The requested value for the heartbeat period exceeds the value of `slave_net_timeout' seconds. A sensible value for the period should be less than the timeout.",
		"The requested value for the heartbeat period exceeds the value of `slave_net_timeout' seconds. A sensible value for the period should be less than the timeout."
	],
	ER_STMT_CACHE_FULL:[
		"Multi-row statements required more than 'max_binlog_stmt_cache_size' bytes of storage; increase this mysqld variable and try again",
		"Multi-row statements required more than 'max_binlog_stmt_cache_size' bytes of storage; increase this mysqld variable and try again"
	],
	ER_MULTI_UPDATE_KEY_CONFLICT:[
		'Primary key/partition key update is not allowed since the table is updated both as %s and %s.',
		'Primary key/partition key update is not allowed since the table is updated both as %0 and %1.'
	],
	ER_TABLE_NEEDS_REBUILD:[
		'Table rebuild required. Please do "ALTER TABLE `%s` FORCE" or dump/reload to fix it!',
		'Table rebuild required. Please do "ALTER TABLE `%0` FORCE" or dump/reload to fix it!'
	],
	WARN_OPTION_BELOW_LIMIT:[
		'The value of %s should be no less than the value of %s',
		'The value of %0 should be no less than the value of %1'
	],
	ER_INDEX_COLUMN_TOO_LONG:[
		'Index column size too large. The maximum column size is %lu bytes.',
		'Index column size too large. The maximum column size is %0 bytes.'
	],
	ER_ERROR_IN_TRIGGER_BODY:[
		'Trigger %s has an error in its body: %s',
		'Trigger %0 has an error in its body: %1'
	],
	ER_ERROR_IN_UNKNOWN_TRIGGER_BODY:[
		'Unknown trigger has an error in its body: %s',
		'Unknown trigger has an error in its body: %0'
	],
	ER_INDEX_CORRUPT:[
		'Index %s is corrupted',
		'Index %0 is corrupted'
	],
	ER_UNDO_RECORD_TOO_BIG:[
		'Undo log record is too big.',
		'Undo log record is too big.'
	],
	ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT:[
		'INSERT IGNORE... SELECT is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are ignored. This order cannot be predicted and may differ on master and the slave.',
		'INSERT IGNORE... SELECT is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are ignored. This order cannot be predicted and may differ on master and the slave.'
	],
	ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE:[
		'INSERT... SELECT... ON DUPLICATE KEY UPDATE is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are updated. This order cannot be predicted and may differ on master and the slave.',
		'INSERT... SELECT... ON DUPLICATE KEY UPDATE is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are updated. This order cannot be predicted and may differ on master and the slave.'
	],
	ER_BINLOG_UNSAFE_REPLACE_SELECT:[
		'REPLACE... SELECT is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are replaced. This order cannot be predicted and may differ on master and the slave.',
		'REPLACE... SELECT is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are replaced. This order cannot be predicted and may differ on master and the slave.'
	],
	ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT:[
		'CREATE... IGNORE SELECT is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are ignored. This order cannot be predicted and may differ on master and the slave.',
		'CREATE... IGNORE SELECT is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are ignored. This order cannot be predicted and may differ on master and the slave.'
	],
	ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT:[
		'CREATE... REPLACE SELECT is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are replaced. This order cannot be predicted and may differ on master and the slave.',
		'CREATE... REPLACE SELECT is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are replaced. This order cannot be predicted and may differ on master and the slave.'
	],
	ER_BINLOG_UNSAFE_UPDATE_IGNORE:[
		'UPDATE IGNORE is unsafe because the order in which rows are updated determines which (if any) rows are ignored. This order cannot be predicted and may differ on master and the slave.',
		'UPDATE IGNORE is unsafe because the order in which rows are updated determines which (if any) rows are ignored. This order cannot be predicted and may differ on master and the slave.'
	],
	ER_PLUGIN_NO_UNINSTALL:[
		'Plugin %s is marked as not dynamically uninstallable. You have to stop the server to uninstall it.',
		'Plugin %0 is marked as not dynamically uninstallable. You have to stop the server to uninstall it.'
	],
	ER_PLUGIN_NO_INSTALL:[
		'Plugin %s is marked as not dynamically installable. You have to stop the server to install it.',
		'Plugin %0 is marked as not dynamically installable. You have to stop the server to install it.'
	],
	ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT:[
		'Statements writing to a table with an auto-increment column after selecting from another table are unsafe because the order in which rows are retrieved determines what (if any) rows will be written. This order cannot be predicted and may differ on master and the slave.',
		'Statements writing to a table with an auto-increment column after selecting from another table are unsafe because the order in which rows are retrieved determines what (if any) rows will be written. This order cannot be predicted and may differ on master and the slave.'
	],
	ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC:[
		'CREATE TABLE... SELECT... on a table with an auto-increment column is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are inserted. This order cannot be predicted and may differ on master and the slave.',
		'CREATE TABLE... SELECT... on a table with an auto-increment column is unsafe because the order in which rows are retrieved by the SELECT determines which (if any) rows are inserted. This order cannot be predicted and may differ on master and the slave.'
	],
	ER_BINLOG_UNSAFE_INSERT_TWO_KEYS:[
		'INSERT... ON DUPLICATE KEY UPDATE on a table with more than one UNIQUE KEY is unsafe',
		'INSERT... ON DUPLICATE KEY UPDATE on a table with more than one UNIQUE KEY is unsafe'
	],
	ER_TABLE_IN_FK_CHECK:[
		'Table is being used in foreign key check.',
		'Table is being used in foreign key check.'
	],
	ER_UNSUPPORTED_ENGINE:[
		'Storage engine %s does not support system tables. [%s.%s]',
		'Storage engine %0 does not support system tables. [%1.%2]'
	],
	ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST:[
		'INSERT into autoincrement field which is not the first part in the composed primary key is unsafe.',
		'INSERT into autoincrement field which is not the first part in the composed primary key is unsafe.'
	]
}
