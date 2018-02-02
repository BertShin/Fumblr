class AddTypeColumnBacktoPostsWithoutKeyWord < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :content_type, :string
  end
end
