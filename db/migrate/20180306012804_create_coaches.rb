class CreateCoaches < ActiveRecord::Migration[5.1]
  def change
    create_table :coaches do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :auth_token
      t.boolean :admin, :null => false

      t.timestamps
    end
  end
end
