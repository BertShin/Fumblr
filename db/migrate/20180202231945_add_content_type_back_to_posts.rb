class AddContentTypeBackToPosts < ActiveRecord::Migration[5.1]
  def change

    add_column :posts, :content_type, :string
    change_column_null :posts, :content_type, false
  end
end
