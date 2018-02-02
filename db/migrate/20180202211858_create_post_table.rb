class CreatePostTable < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :content, null: false
      t.string :type, null: false
      t.integer :user_id, null: false
      t.string :description
      t.string :image_url
      t.integer :likes

      t.timestamps
    end

    add_index :posts, :user_id
    add_index :posts, :title, unique: true
    add_index :posts, :type
  end
end
