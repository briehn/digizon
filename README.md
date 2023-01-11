# [<p align="center"/> <img src="./frontend/src/assets/logo.png" width="400" height="200" />](https://digizon.onrender.com)

## **What is Digizon?**

[Digizon](https://digizon.onrender.com) is a Digimon-themed clone of Amazon. With a backend of Ruby on Rails and a frontend of React & Redux, users will be able to navigate and interact with Digizon's marketplace. Additionally, Digizon utilizes the [Pure React Carousel](https://github.com/express-labs/pure-react-carousel) to generate a carousel for the main page and to render the Top Rated products. User, product, cart, and review information is stored in a PostgreSQL database and product images are stored in Amazon's AWS. With a variety of Digimon-like products to shop from, Digizon is my inner child's utopia.

# **Features**

1. Account creation, user login, user logout, demo login
2. Show product, view all products
3. Create, view, edit and delete product reviews
4. Add, view, edit and delete products in a cart
5. Search for specific products by name or by category

# **V.I.F (Very Important Features)**

## <p align="center"/> **Search** </p>

Being able to click a category to filter products or search for a product by name are, programatically, used the same way.

![Search](./assets/search.gif)

```ruby
class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        if params[:category] == nil && params[:search] == nil
            @products = Product.all
        elsif params[:search] && params[:category] == nil && Product.where("lower(name) LIKE ?", "%" + params[:search].downcase + "%").length == 0
            @products = Product.all
        elsif params[:search] && params[:category] == nil
            @products = Product.select(:id, :name, :description, :price, :category).where("lower(name) LIKE ?", "%" + params[:search].downcase + "%")
        elsif params[:category] && params[:search] == nil
            @products = Product.select(:id, :name, :description, :price, :category).where(category: params[:category])
        end
        render :index
    end

    ...

end
```

When receiving a response from the Products Controller, with only a difference in parameters, a specific list of Products can be given. With this function Digizon is able to, with one request, gain access to products by category or by specific input characters via search bar. Case sensitivity was not initially considered and was an issue that arose when testing out the product. An easy fix with a conversion to lowercase for both the query and search parameter. Similar to Amazon, when a user inputs a search value that results in a non-existent product, the controller returns all products insatead.

With the addition and functionality of a Search Bar, an issue arose where the search bar would not clear itself upon clicking a link or being redirected to another page. This was resolved by adding event listeners to the document and window itself. Presenting, **DOM Manipulation**:

```js
useEffect(() => {
  window.addEventListener("beforeunload", handleBeforeUnload);
  document.addEventListener("click", (e) => handleAfterClick(e));
  window.addEventListener("pageshow", handleBeforeUnload);

  return () => {
    document.removeEventListener("click", handleAfterClick);
    window.removeEventListener("beforeunload", handleBeforeUnload);
    window.removeEventListener("pageshow", handleBeforeUnload);
  };
}, []);

function handleBeforeUnload() {
  setSearch("");
}

function handleAfterClick(e) {
  if (e.target.tagName === "A") {
    setSearch("");
  }
}
```

With this event listeners added, we can now account for user interactions making the correct changes to the search bar so the input is not leftover. A small detail, but makes the experience much better.

## <p align="center"/> **Error Handling: User Authentication and Review** </p>

Validations and constraints are applied to both the user and review objects. However, Amazon had a unique method to display their errors and their messages; so, changes had to be made.

```js
const displayError = (input) => {
  let messages = {
    headline: {
      1: "Please enter your headline.",
      2: "Please enter at most 100 characters.",
    },
    rating: {
      1: "Please select a star rating",
    },
    body: {
      1: "Please add a written review",
      2: "Please enter at most 20000 characters",
    },
  };
  let result = "";
  let type;
  errors.forEach((error) => {
    type = error.split(" ")[0].toLowerCase();
    if (type === input) {
      if (type === "headline" && headline.length > 100) {
        result = messages[type][2];
      } else if (type === "body" && body.length > 20000) {
        result = messages[type][2];
      } else {
        result = messages[input][1];
      }
    }
  });
  return <p>{result}</p>;
};
```

Using the response we get back from our `handleSubmit()` function that dispatches a thunk action creator and catchs any errors, we are able to use those error statements to render an error in a given `<div>` tag in our document with a custom message.

## **Future Features**

###### try saying that 5 times fast

- Add filters to product index page
- Search a product within a given category
- Create lists that hold products for future purchases
- After placing an order, store that order in your profiles past orders page.
