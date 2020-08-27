class DepartmentsController < ApplicationController

    def index 
        departments = Department.all 
        options = {
            inlcude: [:items]
        }
        render json: DepartmentSerializer.new(departments)
    end

    def show 
        department = Department.find(params[:id])
        render json: department
    end

    def create
       department = Department.new(department_params)
       department.save 
       render json: DepartmentSerializer.new(department)
    end

    private
    def department_params
        params.require(:department).permit(:name)
    end
end
