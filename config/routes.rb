Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/login' => "sessions#create"
  delete '/logout' => "sessions#destroy"
  get '/profile' => 'coaches#profile'

  resources :coaches
  resources :coach_logs
  resources :schools
end
