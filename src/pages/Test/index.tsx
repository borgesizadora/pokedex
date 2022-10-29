const Test = () => {
  const test = '() => (teste = 0);';

  return (
    <div>
      <fieldset>
        <legend>Choose your monster&apos;s features:</legend>

        <div>
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales">Scales</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label htmlFor="horns">Horns</label>
          {test ? <>simasdaasddddddddddddddsdasdasdasd</> : <>nasdasddsffffdsasdasdao</>}
        </div>
      </fieldset>
    </div>
  );
};

export default Test;
