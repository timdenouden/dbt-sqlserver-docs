"use strict";(self.webpackChunkdbt_sqlserver_docs=self.webpackChunkdbt_sqlserver_docs||[]).push([[122],{6213:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],l={sidebar_position:1},o="dbt-sqlserver",d={unversionedId:"dbt-sqlserver",id:"dbt-sqlserver",isDocsHomePage:!1,title:"dbt-sqlserver",description:"dbt adapter for sql server.",source:"@site/docs/dbt-sqlserver.md",sourceDirName:".",slug:"/dbt-sqlserver",permalink:"/dbt-sqlserver-docs/docs/dbt-sqlserver",editUrl:"https://github.com/dbt-msft/dbt-msft-docs/docs/dbt-sqlserver.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"dbt-synapse",permalink:"/dbt-sqlserver-docs/docs/dbt-synapse"}},u=[{value:"Authentication",id:"authentication",children:[{value:"Security",id:"security",children:[]},{value:"standard SQL Server authentication",id:"standard-sql-server-authentication",children:[]},{value:"Windows Authentication (SQL Server-specific)",id:"windows-authentication-sql-server-specific",children:[]},{value:"Azure SQL-specific auth",id:"azure-sql-specific-auth",children:[]}]},{value:"Supported features",id:"supported-features",children:[{value:"Materializations",id:"materializations",children:[]},{value:"Seeds",id:"seeds",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"Custom schemas",id:"custom-schemas",children:[]},{value:"Sources",id:"sources",children:[]},{value:"Testing &amp; documentation",id:"testing--documentation",children:[]},{value:"Snapshots",id:"snapshots",children:[]},{value:"DBT Utils",id:"dbt-utils",children:[]},{value:"Indexes",id:"indexes",children:[]}]},{value:"Changelog",id:"changelog",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dbt-sqlserver"},"dbt-sqlserver"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.getdbt.com"},"dbt")," adapter for sql server."),(0,a.kt)("p",null,"Passing all tests in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fishtown-analytics/dbt-integration-tests/"},"dbt-integration-tests"),". "),(0,a.kt)("p",null,"Only supports dbt 0.14 and newer!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For dbt 0.18.x use dbt-sqlserver 0.18.x"),(0,a.kt)("li",{parentName:"ul"},"dbt 0.17.x is unsupported"),(0,a.kt)("li",{parentName:"ul"},"dbt 0.16.x is unsupported"),(0,a.kt)("li",{parentName:"ul"},"For dbt 0.15.x use dbt-sqlserver 0.15.x"),(0,a.kt)("li",{parentName:"ul"},"For dbt 0.14.x use dbt-sqlserver 0.14.x")),(0,a.kt)("p",null,"Easiest install is to use pip:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install dbt-sqlserver\n")),(0,a.kt)("p",null,"On Ubuntu make sure you have the ODBC header files before installing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install unixodbc-dev\n")),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"The following is needed for every target definition for both SQL Server and Azure SQL.  The sections below details how to connect to SQL Server and Azure SQL specifically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"type: sqlserver\ndriver: 'ODBC Driver 17 for SQL Server' (The ODBC Driver installed on your system)\nserver: server-host-name or ip\nport: 1433\nschema: schemaname\n")),(0,a.kt)("h3",{id:"security"},"Security"),(0,a.kt)("p",null,"Encryption is not enabled by default, unless you specify it."),(0,a.kt)("p",null,"To enable encryption, add the following to your target definition. This is the default encryption strategy recommended by MSFT. For more information see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/connection-string-syntax#using-trustservercertificate?WT.mc_id=DP-MVP-5003930"},"this docs page")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'encrypt: true # adds "Encrypt=Yes" to connection string\ntrust_cert: false\n')),(0,a.kt)("p",null,"For a fully-secure, encrypted connection, you must enable ",(0,a.kt)("inlineCode",{parentName:"p"},"trust_cert: false")," because ",(0,a.kt)("inlineCode",{parentName:"p"},'"TrustServerCertificate=Yes"')," is default for ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt-sqlserver")," in order to not break already defined targets. "),(0,a.kt)("h3",{id:"standard-sql-server-authentication"},"standard SQL Server authentication"),(0,a.kt)("p",null,"SQL Server credentials are supported for on-prem as well as cloud, and it is the default authentication method for ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt-sqlsever")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"user: username\npassword: password\n")),(0,a.kt)("h3",{id:"windows-authentication-sql-server-specific"},"Windows Authentication (SQL Server-specific)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"windows_login: True\n")),(0,a.kt)("p",null,"alternatively"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"trusted_connection: True\n")),(0,a.kt)("h3",{id:"azure-sql-specific-auth"},"Azure SQL-specific auth"),(0,a.kt)("p",null,"The following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/connect/odbc/using-azure-active-directory?view=sql-server-ver15#new-andor-modified-dsn-and-connection-string-keywords"},(0,a.kt)("inlineCode",{parentName:"a"},"pyodbc"),"-supported ActiveDirectory methods")," are available to authenticate to Azure SQL:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Azure CLI"),(0,a.kt)("li",{parentName:"ul"},"ActiveDirectory Password"),(0,a.kt)("li",{parentName:"ul"},"ActiveDirectory Interactive"),(0,a.kt)("li",{parentName:"ul"},"ActiveDirectory Integrated"),(0,a.kt)("li",{parentName:"ul"},"Service Principal (a.k.a. AAD Application)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"ActiveDirectory MSI")," (not implemented)")),(0,a.kt)("p",null,"However, the Azure CLI is the ideal way to authenticate instead of using the built-in ODBC ActiveDirectory methods, for reasons detailed below."),(0,a.kt)("h4",{id:"azure-cli"},"Azure CLI"),(0,a.kt)("p",null,"Use the authentication of the Azure command line interface (CLI). First, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"install the Azure CLI"),", then, log in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"az login\n")),(0,a.kt)("p",null,"Then, set ",(0,a.kt)("inlineCode",{parentName:"p"},"authentication")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"profiles.yml")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"CLI"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"authentication: CLI\n")),(0,a.kt)("p",null,"This is also the preferred route for using a service principal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"az login --service-principal --username $CLIENTID --password $SECRET --tenant $TENANTID\n")),(0,a.kt)("p",null,"This avoids storing a secret as plain text in ",(0,a.kt)("inlineCode",{parentName:"p"},"profiles.yml"),"."),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli#sign-in-using-a-service-principal"},"https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli#sign-in-using-a-service-principal")),(0,a.kt)("h4",{id:"activedirectory-password"},"ActiveDirectory Password"),(0,a.kt)("p",null,"Definitely not ideal, but available"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"authentication: ActiveDirectoryPassword\nuser: bill.gates@microsoft.com\npassword: i<3opensource?\n")),(0,a.kt)("h4",{id:"activedirectory-interactive-windows-only"},"ActiveDirectory Interactive (",(0,a.kt)("em",{parentName:"h4"},"Windows only"),")"),(0,a.kt)("p",null,"brings up the Azure AD prompt so you can MFA if need be. The downside to this approach is that you must log in each time you run a dbt command!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"authentication: ActiveDirectoryInteractive\nuser: bill.gates@microsoft.com\n")),(0,a.kt)("h4",{id:"activedirectory-integrated-windows-only"},"ActiveDirectory Integrated (",(0,a.kt)("em",{parentName:"h4"},"Windows only"),")"),(0,a.kt)("p",null,"uses your machine's credentials (might be disabled by your AAD admins), also requires that you have Active Directory Federation Services (ADFS) installed and running, which is only the case if you have an on-prem Active Directory linked to your Azure AD... "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"authentication: ActiveDirectoryIntegrated\n")),(0,a.kt)("h5",{id:"service-principal"},"Service Principal"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_*")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"app_*")," can be used interchangeably. Again, it is not recommended to store a service principal secret in plain text in your ",(0,a.kt)("inlineCode",{parentName:"p"},"dbt_profile.yml"),". The CLI auth method is preferred."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"authentication: ServicePrincipal\ntenant_id: tenatid\nclient_id: clientid\nclient_secret: clientsecret\n")),(0,a.kt)("h2",{id:"supported-features"},"Supported features"),(0,a.kt)("h3",{id:"materializations"},"Materializations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Table: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"- Will be materialized as columns store index by default (requires SQL Server 2017 as least). \n  (For Azure SQL requires Service Tier greater than S2)\nTo override:\n")),"{{\nconfig(\nas_columnstore = false,\n)\n}}"),(0,a.kt)("li",{parentName:"ul"},"View"),(0,a.kt)("li",{parentName:"ul"},"Incremental"),(0,a.kt)("li",{parentName:"ul"},"Ephemeral")),(0,a.kt)("h3",{id:"seeds"},"Seeds"),(0,a.kt)("p",null,"By default, dbt-sqlserver will attempt to insert seed files in batches of 400 rows. If this exceeds SQL Server's 2100 parameter limit, the adapter will automatically limit to the highest safe value possible."),(0,a.kt)("p",null,"To set a different default seed value, you can set the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"max_batch_size")," in your project configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"vars:\n  max_batch_size: 200 # Any integer less than  or equal to 2100 will do.\n")),(0,a.kt)("h3",{id:"hooks"},"Hooks"),(0,a.kt)("h3",{id:"custom-schemas"},"Custom schemas"),(0,a.kt)("h3",{id:"sources"},"Sources"),(0,a.kt)("h3",{id:"testing--documentation"},"Testing & documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schema test supported"),(0,a.kt)("li",{parentName:"ul"},"Data tests supported from dbt 0.14.1"),(0,a.kt)("li",{parentName:"ul"},"Docs")),(0,a.kt)("h3",{id:"snapshots"},"Snapshots"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Timestamp"),(0,a.kt)("li",{parentName:"ul"},"Check")),(0,a.kt)("p",null,"But, columns in source table can not have any constraints. If for example any column has a NOT NULL constraint, an error will be thrown."),(0,a.kt)("h3",{id:"dbt-utils"},"DBT Utils"),(0,a.kt)("p",null,"Many DBT utils macros are supported, but they require the addition of the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsql_utils")," dbt package. "),(0,a.kt)("p",null,"You can find the package and installation instructions in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dbt-msft/tsql-utils"},"tsql-utils repo"),"."),(0,a.kt)("h3",{id:"indexes"},"Indexes"),(0,a.kt)("p",null,"There is now possible to define a regular sql server index on a table.\nThis is best used when the default clustered columnstore index materialisation is not suitable.\nOne reason would be that you need a large table that usually is queried one row at a time."),(0,a.kt)("p",null,"Clusterad and non-clustered index are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create_clustered_index(columns, unique=False)"),(0,a.kt)("li",{parentName:"ul"},"create_nonclustered_index(columns, includes=False)"),(0,a.kt)("li",{parentName:"ul"},"drop_all_indexes_on_table(): Drops current indexex on a table. Only meaningfull if model is incremental.")),(0,a.kt)("p",null,"Example of applying Unique clustered index on two columns, Ordinary index on one column, Ordinary index on one column with another column included"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{{\n    config({\n        \"as_columnstore\": false, \n        \"materialized\": 'table',\n        \"post-hook\": [\n            \"{{ create_clustered_index(columns = ['row_id', 'row_id_complement'], unique=True) }}\",\n            \"{{ create_nonclustered_index(columns = ['modified_date']) }}\",\n            \"{{ create_nonclustered_index(columns = ['row_id'], includes = ['modified_date']) }}\",\n        ]\n    })\n}}\n")),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dbt-msft/dbt-sqlserver/blob/master/CHANGELOG.md"},"the changelog")))}p.isMDXComponent=!0}}]);