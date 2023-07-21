# Holonet
This website is a demo & cannot be used to purchase anything.

However, most of the functionality you would find in a typical e-commerce website is here (except for actually delivering your order). The website itself was made using the .NET framework with Angular. PostgreSQL is used for the database, and the website is hosted using Digital Ocean.

I did not want to buy a domain name for just a demo website. I am not made of money.

Following a Udemy course from here:

https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/

Most of the products on this website are from Hololive and the theme of the website itself is pretty much of a parody of Hololive. The rest of the products are just things I like.

This store is supposed to focus on selling plushies, CDs, and figures.

![image](https://github.com/Jogira/holonet/assets/46968282/fa768ffb-7eef-46f3-a933-f16ed656f0ed)

In this site, you're able to create a basket of items of things you want to buy.

![image](https://github.com/Jogira/holonet/assets/46968282/1f9b9bde-cb56-4246-a12c-0a12c7583016)

You can use the tags to filter the results by brand or product type, as well as sort by price or alphabetical order.


![image](https://github.com/Jogira/holonet/assets/46968282/dcc550d8-e4ba-45f6-a2e4-f80962cef331)

You can even type in the search bar to directly look for products. You can also click a product to view its details page. The products are cut up into 6 items per page using pagination.


![image](https://github.com/Jogira/holonet/assets/46968282/39177d32-93a4-436b-99af-fd6b3b6f0cf2)

![image](https://github.com/Jogira/holonet/assets/46968282/5c12e516-ff03-455a-84c2-547c101ab2d1)


When you've selected what you want to buy, you can go to the basket summary page and review your order. From here, you can edit your basket and edit the quantity of an item, as well as remove it from your cart. You will be prompted to make an account or login if you aren't already before completing your order.

![image](https://github.com/Jogira/holonet/assets/46968282/5e93d55b-7487-43a0-bffd-72279fd38fb7)

There is validation on forms to make sure the information you're entering is valid. The submit button is disabled until all fields are valid.

![image](https://github.com/Jogira/holonet/assets/46968282/7ae7ce0d-8e45-4159-b027-247bf0a8712b)

![image](https://github.com/Jogira/holonet/assets/46968282/1a78efe6-7e59-4fa8-b3f8-37b1b57c3b2c)


On the checkout page, you can enter your address and save it for later use, select your choice of shipping, review your orders once more, and enter your card information. All forms include validation both on the client side and API side.
The checkout process is linear, so you can't skip automatically to the payment section without filling out your address first, but you can go back if you need.

![image](https://github.com/Jogira/holonet/assets/46968282/d0e26b29-d7b9-4268-9db7-a61af08a21ff)
![image](https://github.com/Jogira/holonet/assets/46968282/f1812672-a54c-4066-b7bc-2afa0a973a33)
![image](https://github.com/Jogira/holonet/assets/46968282/309b2461-2f62-4eed-9768-eeb4297d3009)

The credit card validation is handled by Stripe API as well to ensure a secure checkout. However since I did not buy a domain, I could not host the site over a HTTPS connection. If you'd like to test this yourself, please use 4242 4242 4242 4242 as the card number (Stripe's test credit card),
as well as an expiration date set any time in the future. Any CVC works.

![image](https://github.com/Jogira/holonet/assets/46968282/8c977b39-d124-467b-8ef4-034bf8f9e585)
![image](https://github.com/Jogira/holonet/assets/46968282/a09fd771-513c-4ccf-a3b5-5e28711f87b1)

Once you're done checking out, you're brought to a 'order complete' page where you can click the 'view order' button to check your past orders.
![image](https://github.com/Jogira/holonet/assets/46968282/a17967bb-8be3-4e40-940f-0c860ce2c9fe)
![image](https://github.com/Jogira/holonet/assets/46968282/5599043c-d222-40d0-ac8f-0d82a1a80e89)
![image](https://github.com/Jogira/holonet/assets/46968282/18fe9395-07e7-4780-b938-56152ad34f1d)

⭐ Some subtle features that aren't obvious but still took a lot of work:

- Caching to make pages you've visited before load faster.
- Being about to logout and log back in as user accounts are created with the .NET identity framework.
- Error handling built into the client as well as client side. If anything goes wrong, a toast will appear with error details.
- A generic repository and specification design pattern to help with scaling the application. Dependency injection made the sharing of data across different components streamlined.
- Breadcrumb routing to keep track of where you are on the site, as well as taking you back step by step if you need.
- APIs with DTOs to share clean responses to any API calls. This includes being able to register for an account, as well as search the database directly through an API call.

![image](https://github.com/Jogira/holonet/assets/46968282/bdee3bf6-fac8-4ad0-816c-28d162a14f00)






