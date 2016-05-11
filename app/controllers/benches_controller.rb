class BenchesController < ApplicationController
  def index
  end

  def create
    Bench.create(bench_params)
  end

  private

  def bench_params
    params.permit(:description, :lat, :lng)
  end
end
