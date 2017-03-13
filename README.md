# Bench BnB

A full stack web app built to practice Rails, React-Redux, and authentication.

# Development notes

## Routes
```
     Prefix Verb   URI Pattern            Controller#Action
       root GET    /                      static_pages#root
  api_users POST   /api/users(.:format)   api/users#create {:format=>:json}
api_session DELETE /api/session(.:format) api/sessions#destroy {:format=>:json}
            POST   /api/session(.:format) api/sessions#create {:format=>:json}
```

## Left off on
`Greeting` Components

## Ajax sign ins

``` javascript
user = {
  "username": "user",
  "password": "password"
};

// Sign Up

// Sign in
$.ajax({
  method: 'POST',
  url: 'api/session',
  data: {user}
})

// Sign out
$.ajax({
  method: 'DELETE',
  url: 'api/session'
})
```