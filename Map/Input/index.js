import React from "react";
import BaseInput from "./BasedInput";
import AdddInput from "./AddInput";

const Input = () => {
  return (
    <View style={{ flex: 1, padding: 40 }}>
      <AppInput
        label="Name"
        value={input}
        onChange={input => this.setState({ input })}
      />
    </View>
  );
};
