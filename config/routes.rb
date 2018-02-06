Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :edit, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:new, :create, :index, :show, :destroy]
  end

end
