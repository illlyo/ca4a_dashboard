class CreateCa4ASchools < ActiveRecord::Migration[5.1]
  def change
    create_table :ca4_a_schools do |t|

      t.timestamps
    end
  end
end
