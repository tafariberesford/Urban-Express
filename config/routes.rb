Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :reviews
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :songs do
    resources :reviews, only: :create
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
