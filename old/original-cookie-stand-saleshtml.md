<!-- <!DOCTYPE html> -->
<!-- <html> -->
   <head>
      <meta charset='utf-8' />
      <title>Pat's Salmon Cookies</title>
      <!-- <link rel="stylesheet" type="text/css" href="css/reset.css" /> -->
      <link href="https://fonts.googleapis.com/css?family=Trade+Winds&display=swap" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="css/style.css"/>
      <a href="index.html">Home Page</a>
   </head>
   <body>
      <header>
         <h1 id = "salesHeader">Pat's Salmon Cookies:  Sales Data</h1>
      </header>
      <main id = "locations">
         <table id = "locationsTable">
            <thead id = "locationsHead">
               <tr id = "locationsHeadRow">
                  <td></td>
                  <!--   Top left corner of table -->
               </tr>
            </thead>
            <tbody>
            </tbody>
            <tfoot></tfoot>
         </table>
         <form id = "formElement">
            <div>
            <fieldset>
               <legend>
                  <font size="+2">New Location Details.</font>  <b>Once the form is complete, click Add button:</b>
               </legend>
               <label for = "name"><b>Location Name</b></label>
               <input type="text"  size = "30" maxlength="100" input id="name"/>
               <label for ="custMin"><b>Minimum number of customers:</b></label>
               <input type="number" size = "10" maxlength="10" input id="custMin"/>
               <label for = "custMax"><b>Maximum number of customers:</b></label>
               <input type="number" size = "10" maxlength="10" input id="custMax"/>
               <label for  = "cookieAvgSale"><b>Average cookie sale:</b></label>
               <input type="number" size = "10" maxlength="10" input id="cookieAvgSale"/>
               <button id = "add">Add</button>
            </fieldset>
         </div>
         </form>
      </main>
      <script src="js/app.js"></script>
   </body>
</html>
