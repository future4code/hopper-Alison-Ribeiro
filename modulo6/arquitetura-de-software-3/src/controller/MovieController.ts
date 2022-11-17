import { MovieBusiness } from "./../business/MovieBusiness";
import { Request, Response } from "express";

export class MovieController {
  async createMovie(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, duration_in_minutes, year_of_release } = req.body;

      const input = {
        title,
        description,
        duration_in_minutes,
        year_of_release,
      };

      const movieBusiness = new MovieBusiness();
      await movieBusiness.createMovie(input);

      res.status(201).send({ message: "Movie criada." });

    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}