set :css_dir, 'stylesheets'

activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
end
