class ChangeColumnType < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :type
  end
end
