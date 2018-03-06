class CreateCoaches < ActiveRecord::Migration[5.1]
  def change
    create_table :coaches do |t|
      t.string :f_name
      t.string :l_name
      t.string :email

      t.timestamps
    end
  end
end
