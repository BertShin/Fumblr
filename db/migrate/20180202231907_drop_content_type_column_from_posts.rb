class DropContentTypeColumnFromPosts < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :content_type
  end
end
