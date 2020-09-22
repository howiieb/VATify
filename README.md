# VATify
I work on an Shopify store that sells to a variety of international consumers, some of wholm pay VAT in the UK and some of wholm are international, and do not. 
Additionally, we use wholesale plugins that modify the display of prices to the store, on the fly, based upon a customer's account tags, and these plugins are 
a black box that work on an external server that we have no access too, and update the DOM in real time. 

This pure JS snippet is my solution to this for our store's use case, and may be useful on other stores. This checks all divs and spans with the classes listed on line 2,
extracts the value (clearing any nasty whitespace that some themes introduce), adds 20% to it, and displays it alongside that price. Additionally, it checks for whenever
the DOM is updated (say, by another plugin that does its own price processing), and keeps this new price up to date. This may not work for all pricing-based plugins
as it is dependent upon the way that plugin changes the DOM value - this was created for the use of **Wholesale Gorilla**, one of the leading apps on the market. 

Update the class on line 2 as your theme tags price values. You can duplicate the line to add additional tags. Then add this script to a part of your theme that renders
on every single page (for ours, it is the footer, for instance).

This software comes without any warranty or disclaimer of any kind. It may be appropiate to your needs or not, 
but I can provide no additional support or guarantees about its capability, nor liability in the case of damage to your site or business.
